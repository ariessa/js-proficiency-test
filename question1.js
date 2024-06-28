/**
 * Fetches data from the specified API endpoint.
 *
 * This function makes an asynchronous request to the API endpoint and returns the data in JSON format.
 * If the response is not ok, it throws an HTTP error with the status code.
 *
 * @async
 * @function fetchData
 * @returns {Promise<Object>} The data retrieved from the API in JSON format.
 * @throws Will throw an error if the fetch operation or JSON parsing fails.
 */
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
