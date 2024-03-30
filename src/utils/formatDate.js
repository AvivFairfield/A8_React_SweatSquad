/**
 * Formats a JavaScript Date object into a string with the format "YYYY-MM-DD HH:MM:SS".
 * The function formats the date and time based on the local time zone.
 *
 * @param {Date} date - The Date object to format.
 * @returns {string} A string representing the formatted date and time.
 */

//Example Usage:
//const now = new Date();
//console.log(formatDate(now)); // Outputs: "YYYY-MM-DD HH:MM:SS"
export const formatDate = (date) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
};
