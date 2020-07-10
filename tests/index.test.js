const Checkout = require('../src/checkout');
const data = require('../src/data');

describe('Test checkout store', () => {
  test('Scenario 1', () => {
    const co = new Checkout(data);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    expect(co.products).toEqual({
      atv: {
        name: 'Apple TV',
        qty: 3,
        unitPrice: 109.5,
        freeQty: 0,
        totalPrice: 0,
        totalQty: 0,
      },
      vga: {
        name: 'VGA adapter',
        qty: 1,
        unitPrice: 30.00,
        freeQty: 0,
        totalPrice: 0,
        totalQty: 0,
      },
    });

    const total = co.total();
    expect(total).toBe(249);

    expect(co.products).toEqual({
      atv: {
        name: 'Apple TV',
        qty: 2,
        unitPrice: 109.5,
        freeQty: 1,
        totalPrice: 219,
        totalQty: 3,
      },
      vga: {
        name: 'VGA adapter',
        qty: 1,
        unitPrice: 30,
        freeQty: 0,
        totalPrice: 30,
        totalQty: 1,
      },
    });
  });

  test('Scenario 2', () => {
    const total = new Checkout(data)
      .scan('atv')
      .scan('ipd')
      .scan('ipd')
      .scan('atv')
      .scan('ipd')
      .scan('ipd')
      .scan('ipd')
      .total();

    expect(total).toBe(2718.95);
  });

  test('Scenario 3', () => {
    const checkout = new Checkout(data);
    checkout.scan('mbp');
    checkout.scan('vga');
    checkout.scan('ipd');
    const total = checkout.total();

    expect(total).toBe(1949.98);
  });
});
