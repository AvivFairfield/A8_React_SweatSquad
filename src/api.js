export async function getRequest(url) {
	try {
		const response = await fetch("http://localhost:5000" + url);

		return await response.json();
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
}

export async function postRequest(url, body) {
	try {
		const response = await fetch("http://localhost:5000" + url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		return await response.json();
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
}
