const Checkout = require('./src/checkout');
const data = require('./src/data');

const co = new Checkout(data);
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');
co.total();

new Checkout(data)
  .scan('atv')
  .scan('ipd')
  .scan('ipd')
  .scan('atv')
  .scan('ipd')
  .scan('ipd')
  .scan('ipd')
  .total();

new Checkout(data)
  .scan('mbp')
  .scan('vga')
  .scan('ipd')
  .total();