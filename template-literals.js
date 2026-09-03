// Rewrite using template literals:
const product = 'Laptop';
const price = 899;
const tax = 0.08;
const total = price * (1 + tax);

const message = 'The ' + product + ' costs $' + total.toFixed(2) + ' including tax.';