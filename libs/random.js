import getData from "../utils/api.js";
import Languages from "./languages.js";

const Random = {
	Article: function (callback, language = "en") {
		var url = `https://${language}.wikipedia.org/api/rest_v1/page/random/title`;

		getData(url, false, (data) => {
			var { error, data } = data;
			if (!error) {
				var obj = data.data.items[0];
				var result = {
					success: true,
					data: {
						title: obj.title,
						id: obj.page_id,
						language: obj.page_language,
					},
				};
			} else {
				var result = error;
			}

			if (typeof callback === "function") {
				callback(result);
			}
		});
	},
	Language: function (callback) {
		var codes = Object.keys(Languages.Codes);
		var code = codes[Math.floor(Math.random() * codes.length)];
		var result =
			Languages.Codes[codes[Math.floor(Math.random() * codes.length)]];
		result.code = code;

		result = {
			success: true,
			data: result,
		};

		if (typeof callback === "function") {
			callback(result);
		}

		return result;
	},
};

export default Random;
