import axios from "axios";
const Validate = {
	checkIfExists: function (title, callback) {
		var url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=${title}`;
		axios
			.get(url)
			.then((res) => {
				var obj = res.data;
				var pageid = Object.keys(obj.query.pages)[0];
				var data = obj.query.pages[pageid];

				if (pageid !== "-1") {
					r({
						exist: true,
						title: data.title,
						id: data.pageid,
						url: `https://en.wikipedia.org/?curid=${data.pageid}`,
					});
					return;
				} else {
					sendError();
				}
			})
			.catch(sendError);

		function sendError() {
			r({
				exist: false,
			});
		}
		function r(data) {
			if (typeof callback === "function") {
				callback(data);
			}
		}
	},
};

export default Validate;
