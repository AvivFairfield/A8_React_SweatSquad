// Define an array of labels representing dates
const labels = [
  "January 24",
  "February 24",
  "March 24",
  "April 24",
  "May 24",
  "June 24",
  "July 24",
  "August 24",
  "Septemper 24",
  "October 24",
  "November 24",
  "December 24",
];

// Define configuration data for a chart
export const configData = {
  labels: labels,// Assign the labels array to the 'labels' property
  datasets: [
    {
      label: "Weight",// Label for the first dataset representing weight data
      backgroundColor: "hsl(252, 82.9%, 67.8%)",// Background color for weight data
      borderColor: "hsl(252, 82.9%, 67.8%)",// Border color for weight data
      data: [85, 82, 80, 78, 75, 74, 72],// Weight data for each corresponding label
    },
    {
      label: "",// Empty label for the second dataset
      backgroundColor: "white",// Background color for the second dataset
      borderColor: "white",// Border color for the second dataset
      data: [60],// Data for the second dataset (only one value)
    },
    {
      label: "Goal",// Label for the third dataset representing goal data
      backgroundColor: "orange",// Background color for goal data
      borderColor: "orange",// Border color for goal data
      data: Array(labels.length).fill(75),// Goal data for each corresponding label, filled with a value of 75
      fill: false,// Indicates that the area under the line should not be filled
    },
  ],
};
