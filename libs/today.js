import axios from "axios";
import * as cheerio from "cheerio";

const WikiScrapper = {
	GetHtml: function (url, callback) {
		axios
			.get(url)
			.then((response) => {
				if (typeof callback === "function") {
					callback(response);
				}
			})
			.catch((error) => {
				return {
					data: false,
				};
			});
	},
	GetOnThisDay: function (params, callback) {
		try {
			const monthNames = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];

			const date = new Date();

			var Obj = {};
			var predefinedCategory = ["births", "deaths", "events"];

			var category = params.categories ?? ["events", "births", "deaths"];
			var month, day;

			month =
				monthNames[parseInt(params.month) - 1] ||
				monthNames[date.getMonth()];
			day = params.day || date.getDate();

			console.log(params);
		} catch {
			giveError("Invalid month or day");
			return;
		}

		for (var i = 0; i < category.length; i++) {
			if (!predefinedCategory.includes(category[i])) {
				giveError(`"${category[i]}" is not a valid category`);
			}
		}

		var endpoint = `https://en.wikipedia.org/wiki/${month}_${day}`;

		this.GetHtml(endpoint, (response) => {
			if (response === false) {
				giveError();
			}
			var $ = cheerio.load(response.data);

			for (var i = 0; i < category.length; i++) {
				var thisCat = category[i];
				var id = "#" + thisCat.toCapitalize();
				console.log(id);

				var rArray = [];
				$(id)
					.parent()
					.nextUntil("h2")
					.each(function () {
						var x = $(this);
						if (x.is("ul")) {
							var li = $(this).find("li");

							li.each((i, elem) => {
								try {
									var data = $(elem).text().split(" – ");
									var content = data[1]
										.replace(/ *\([^)]*\) */g, "")
										.replace(/ *\[[^)]*\] */g, "");

									var Obj = {
										year: data[0],
										snippet: content,
									};
									rArray.push(Obj);
								} catch (error) {
									giveError(error);
								}
							});

							Obj[thisCat] = rArray;
						}
					});
			}

			if (typeof callback === "function") {
				callback({
					success: true,
					data: {
						results: Obj,
						categories: category,
						date: month + " " + day,
					},
				});
			}
		});

		function giveError(err) {
			callback({
				status: "error",
				message: err ?? "No results found",
			});
		}
	},
};

Object.defineProperty(String.prototype, "toCapitalize", {
	value: function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	},
	enumerable: false,
});

export default WikiScrapper;
