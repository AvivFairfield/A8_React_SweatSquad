/**
 * Function to report web performance metrics using the 'web-vitals' library.
 * This function conditionally loads the library and registers callback functions
 * for different web vital metrics.
 *
 * 
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
//Exports the reportWebVitals function to be used elsewhere in the application.
export default reportWebVitals;
