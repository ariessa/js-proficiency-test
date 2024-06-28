/**
 * Dataset containing employee commission records.
 * Each record includes the employee's name, commission amount, and date.
 *
 * @constant {Array<Object>}
 */
const dataset = [
  { employee: "IFWAT BIN ZULKIFLI", commission: "RM120", date: "2024-05-02" },
  { employee: "ANAS BIN ABDUL MALIK", commission: "RM92", date: "2024-05-01" },
  {
    employee: "MOHAMAD HAFIZ BIN MOHD NORANI",
    commission: "RM117",
    date: "2024-05-01",
  },
  {
    employee: "MOHAMAD HAFIZ BIN MOHD NORANI",
    commission: "RM113.50",
    date: "2024-05-03",
  },
  {
    employee: "MOHAMAD HAFIZ BIN MOHD NORANI",
    commission: "RM74",
    date: "2024-05-02",
  },
  {
    employee: "IFWAT BIN ZULKIFLI",
    commission: "RM101.20",
    date: "2024-05-03",
  },
  { employee: "MOHD AMIN", commission: "RM117", date: "2024-05-04" },
  {
    employee: "AHMAT WIZAM BIN TASLIM",
    commission: "RM88.70",
    date: "2024-05-03",
  },
];

/**
 * Calculates the daily average commissions from the provided dataset.
 *
 * @function calculateDailyAverageCommissions
 * @param {Array<Object>} data - The dataset containing employee commission records.
 * @returns {string} A JSON string representation of an array of objects:
 *   - {string} date: The date in "DD/MM/YYYY" format.
 *   - {string} averageCommission: The average commission for that date, formatted to two decimal places.
 */
function calculateDailyAverageCommissions(data) {
  const commissionsByDate = {};

  // Aggregate commissions by date
  data.forEach((entry) => {
    const date = entry.date;
    const commission = parseFloat(entry["commission"].replace("RM", ""));

    if (!commissionsByDate[date]) {
      commissionsByDate[date] = [];
    }

    commissionsByDate[date].push(commission);
  });

  // Calculate average commissions
  const averageCommissions = Object.entries(commissionsByDate).map(
    ([date, commissions]) => {
      const total = commissions.reduce((sum, value) => sum + value, 0);
      const average = total / commissions.length;
      return {
        date: new Date(date).toLocaleDateString("en-GB"),
        averageCommission: average.toFixed(2),
      };
    }
  );

  // Sort by date in descending order
  averageCommissions.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return result in JSON format
  return JSON.stringify(averageCommissions, null, 2);
}

// Example of usage
console.log(calculateDailyAverageCommissions(dataset));
