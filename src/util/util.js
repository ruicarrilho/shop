export const format = num =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2);