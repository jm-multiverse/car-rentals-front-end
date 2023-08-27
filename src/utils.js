export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0,
});

export const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api'