//Performs a GET request to a specified API endpoint.

export async function getRequest(url) {
	try {
		//Fetches data from the server. Await pauses until the fetch completes.
		const response = await fetch(
			"https://sweatsquadapi.onrender.com" + url
		);

		//Parses the response body as JSON. Await pauses until the parsing completes.
		return await response.json();
	} catch (error) {
		//Logs the error to the console
		console.error("Error:", error);
		//Rethrows the error to be handled by the calling function
		throw error;
	}
}
//Performs a POST request to a specified API endpoint with a JSON body.

export async function postRequest(url, body) {
	try {
		
		const response = await fetch(
			"https://sweatsquadapi.onrender.com" + url,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}
		);

		return await response.json();
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
}
