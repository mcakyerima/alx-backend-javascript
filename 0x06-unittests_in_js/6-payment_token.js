/**
 * Function to get payment token from API.
 * @param {boolean} success - Indicates if the API call is successful.
 * @returns {Promise<Object>} - A promise that resolves to an object with data.
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // For failure, we don't need to do anything, so just resolve with undefined.
      resolve(undefined);
    }
  });
}

module.exports = getPaymentTokenFromAPI;
