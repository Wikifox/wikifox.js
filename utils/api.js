import axios from "axios";
import Validate from "../libs/validate.js";

function getData(url, title, callback = console.log) {
	axios
		.get(url)
		.then((res) => {
			if (title) {
				Validate.checkIfExists(title, (data) => {
					if (data.exist === true) {
						callback({
							success: true,
							data: res,
						});
					} else {
						callback({
							success: false,
							error: {
								success: false,
								error: "Article not found",
							},
						});
					}
				});
			} else {
				callback({
					success: true,
					data: res,
				});
			}
		})
		.catch((error) => {
			callback({
				success: false,
				error: "Unknown Error Occured! Couldn't fetch data",
			});
			console.log(error.message);
		});
}

export default getData;
