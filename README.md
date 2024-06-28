# ⚡ JavaScript Proficiency Test ⚡

## Question 1: Asynchronous Operations and Error Handling

Given the following JavaScript code snippet, identify the errors and provide the corrected code. Explain your reasoning behind each change.

```
async function fetchData() {
  const data = await fetch("https://api.example.com/data");
  const json = data.json();
  return json;
}

fetchData()
  .then((response) => {
    console.log("Data received:", response);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

Instructions:

1. Review the provided code and identify any potential issues related to asynchronous operations or error handling.
2. Correct the code and explain why the changes are necessary.
3. Consider edge cases such as network errors or invalid JSON responses.

<br />

### Answer for Question 1

Corrected code can be found in file [question1.js](question1.js).

<br />

#### Explanation of changes and why they were made

##### Explanation of Changes 1
The code inside asynchronous function `fetchData` needs to be wrapped with a `try...catch` block so that any error that happens during `fetch` call or JSON parsing are handled correctly. The `catch` blocks will first logs the error before throwing it. This makes sure that the promise returned by the asynchronous function `fetchData` is rejected and catch inside the `try...catch` block.

##### Reason Why They Were Made 1
The asynchronous function `fetchData` does not have any error handling. If the execution of fetch call inside the function fails or the response is not a valid JSON, it will throw an error that will not be handled inside the function.

<br />

##### Explanation of Changes 2
The `data.json()` call is a promise that needs to be awaited. It needs to de declared with the keyword `await` to ensure that it will return a parsed JSON data instead of a promise.

##### Reason Why They Were Made 2
The line `const json = data.json();` should have await because `data.json()` is a promise.

<br />

##### Explanation of Changes 3
After executing the `fetch()` call, check the `response.ok` property to make sure that the request was successful. If `response.ok` property is false, throw an error with the relevant HTTP status code.

##### Reason Why They Were Made 3
The asynchronous function `fetchData` does not handle any network errors or HTTP status codes such as 404 and 500.

<br />

## Question 2: Calculate Daily Average Commissions

Using the dataset provided below, write a JavaScript function (or multiple functions) to return daily average commissions in JSON format. The date must be sorted in descending order and displayed in the format "DD/MM/YYYY" and the commission must be in 2 decimals format.


Dataset
```
{"employee": "IFWAT BIN ZULKIFLI", "commission:": "RM120", "date": "2024-05-02"},
{"employee": "ANAS BIN ABDUL MALIK", "commission:": "RM92", "date": "2024-05-01"},
{"employee": "MOHAMAD HAFIZ BIN MOHD NORANI", "commission:": "RM117", "date": "2024-05-01"},
{"employee": "MOHAMAD HAFIZ BIN MOHD NORANI", "commission:": "RM113.50", "date": "2024-05-03"},
{"employee": "MOHAMAD HAFIZ BIN MOHD NORANI", "commission:": "RM74", "date": "2024-05-02"},
{"employee": "IFWAT BIN ZULKIFLI", "commission:": "RM101.20", "date": "2024-05-03"},
{"employee": "MOHD AMIN", "commission:": "RM117", "date": "2024-05-04"},
{"employee": "AHMAT WIZAM BIN TASLIM", "commission:": "RM88.70", "date": "2024-05-03"}
```

<br />

### Answer for Question 2

- Answer can be found in file [question2.js](question2.js)

- Sample output

```
[
  {
    "date": "04/05/2024",
    "averageCommission": "117.00"
  },
  {
    "date": "03/05/2024",
    "averageCommission": "101.13"
  },
  {
    "date": "02/05/2024",
    "averageCommission": "97.00"
  },
  {
    "date": "01/05/2024",
    "averageCommission": "104.50"
  }
]
```

#### Explanation
I calculated the daily average commissions from the provided dataset as follows:
- Cleaned up the dataset by removing unnecessary colon (`:`) in key `commission`
- Looped through each data in the dataset
    - Extracted the date
    - Extracted the value of `commission`, replaced `RM` with empty string and parse it into `float`
    - Store date and commission inside an `Object` called `commissionsByDate`
- Calculate the total and average commission for each date
- Convert the Object `aggregated commissions` into an array
    - Format the date in "DD/MM/YYYY" format and the average commission to 2 decimal places
- Sort array `aggregated commissions` by date in descending order
- Return array `aggregated commissions` in JSON format using `JSON.stringify()`
