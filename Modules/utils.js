
// Utils Module 1
export function generateOptions(options) {
    return Object.entries(options)
      .map(
        ([currencyCode, currencyName]) =>
          `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
      )
      .join('');
  }
  
  
  // Utils Module 4
  export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  }