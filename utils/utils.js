export const getData = async (query) => {
	return fetch("data.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data.map((obj) =>
				Object.keys(obj)
					.filter((key) => key === query)
					.reduce((cur, key) => {
						return Object.assign(cur, { [key]: obj[key] });
					}, {})
			);
		});
};
