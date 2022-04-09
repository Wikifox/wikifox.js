import getData from "../utils/api.js";
import Parser from "../utils/parser.js";

class Article {
	constructor(obj = {}) {
		var article = obj.article ?? "Wikipedia";
		var language = obj.language ?? "en";

		this.language = language;
		this.article = article;
		this.base = `https://${language}.wikipedia.org`;
	}
	getSummary(callback) {
		var url = `${this.base}/w/api.php?action=query&prop=extracts&format=json&exintro=&explaintext=&titles=${this.article}`;

		getData(url, this.article, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = Parser.parseWikipediaObj(data.data);
				var result = {
					success: true,
					data: {
						id: obj.pageid,
						title: obj.title,
						content: Parser.stripHTML(obj.extract),
						url: `${this.base}/?curid=${obj.pageid}`,
						wikifox: `http://wikifox.netlify.app/wiki?${obj.title}`,
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
	getHTML(callback) {
		var url = `${this.base}/w/api.php?action=parse&format=json&page=${this.article}&prop=text&origin=*`;

		getData(url, this.article, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = data.data.parse;
				var result = {
					success: true,
					data: {
						id: obj.pageid,
						title: obj.title,
						content: obj.text["*"],
						url: `${this.base}/?curid=${obj.pageid}`,
						wikifox: `http://wikifox.netlify.app/wiki?${obj.title}`,
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
	getContent(callback) {
		var url = `${this.base}/w/api.php?action=query&prop=extracts&titles=${this.article}&format=json&origin=*`;

		getData(url, this.article, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = Parser.parseWikipediaObj(data.data);
				var result = {
					success: true,
					data: {
						id: obj.pageid,
						title: obj.title,
						content: Parser.stripHTML(obj.extract),
						url: `${this.base}/?curid=${obj.pageid}`,
						wikifox: `http://wikifox.netlify.app/wiki?${obj.title}`,
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
}

export default Article;
