module.exports = [
    {
      sku: 'ipd',
      name: 'Super iPad',
      price: 549.99, 
      offer: {
          type: 'bulkPriceDiscount',
          qty: 4,
          discountedPrice: 499.99,
      },
    },
    {
      sku: 'mbp',
      name: 'MacBook Pro',
      price: 1399.99,
      offer: {
        type: 'freeItem',
        freeItemSKU: 'vga',
      },
    },
    {
      sku: 'atv',
      name: 'Apple TV',
      price: 109.50,
      offer: {
        type: 'qtyPriceDiscount',
        qty: 3,
        discountQty: 1,
    },
    },
    {
      sku: 'vga',
      name: 'VGA adapter',
      price: 30.00,
    },
  ];
  