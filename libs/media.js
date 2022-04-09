import getData from "../utils/api.js";
import Parser from "../utils/parser.js";
import Validate from "../libs/validate.js";

class Media {
	constructor(obj = {}) {
		var article = obj.article ?? "Wikipedia";
		var language = obj.language ?? "en";

		this.language = language;
		this.article = article;
		this.base = `https://${language}.wikipedia.org`;
	}
	getThumbnail(callback, maxsize) {
		maxsize ? (maxsize = `&pithumbsize=${maxsize}`) : (maxsize = "");
		var url = `${this.base}/w/api.php?action=query&prop=pageimages&format=json&titles=${this.article}${maxsize}`;

		getData(url, this.article, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = Parser.parseWikipediaObj(data.data);
				var result = {
					success: true,
					data: {
						url: obj.thumbnail.source,
						width: obj.thumbnail.width,
						height: obj.thumbnail.height,
						title: obj.title,
						id: obj.pageid,
					},
				};
			} else {
				var result = error;
			}

			if (typeof callback === "function") {
				callback(result);
			}
		});
	}

	getImages(callback) {
		var url = `${this.base}/w/api.php?action=parse&prop=images&format=json&origin=*&page=${this.article}`;

		getData(url, this.article, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = data.data.parse;
				var result = {
					success: true,
					data: {
						title: obj.title,
						id: obj.pageid,
						images: [],
					},
				};
				obj.images.forEach((image) => {
					result.data.images.push(
						`https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:${image}`
					);
				});
			} else {
				var result = error;
			}

			if (typeof callback === "function") {
				callback(result);
			}
		});
	}
	getPDF(callback, download) {
		Validate.checkIfExists(this.article, (data) => {
			if (data.exist === true) {
				var result = {
					success: true,
					data: {
						url: `https://en.wikipedia.org/api/rest_v1/page/pdf/${data.title}`,
					},
				};
				if (download) {
					if (typeof process !== "object") {
						window.location.assign(result);
					}
				}
			} else {
				var result = {
					success: false,
					error: "Article not found",
				};
			}

			if (typeof callback === "function") {
				callback(result);
			}
		});
	}
}

export default Media;
