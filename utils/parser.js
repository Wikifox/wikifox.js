const Parser = {
	parseWikipediaObj: function (obj) {
		var pageid = Object.keys(obj.query.pages);
		var data = obj.query.pages[pageid];
		return data;
	},
	stripHTML: function (html) {
		try {
			return html.replace(/(<([^>]+)>)/gi, "");
		} catch {
			return html;
		}
	},
};

export default Parser;
