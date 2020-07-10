module.exports = [
    {
      sku: 'ipd',
      name: 'Super iPad',
      price: 549.99, 
      offer: {
          type: 'bulkPriceDiscount',
          discountQty: 4,
          discountedPrice: 499.99,
      },
    },
    {
      sku: 'mbp',
      name: 'MacBook Pro',
      price: 1399.99,
      offer: {
        type: 'freeProduct',
        freeProductSKU: 'vga',
      },
    },
    {
      sku: 'atv',
      name: 'Apple TV',
      price: 109.50,
      offer: {
        type: 'qtyPriceDiscount',
        discountQty: 3,
        discountQtyAmount: 1,
    },
    },
    {
      sku: 'vga',
      name: 'VGA adapter',
      price: 30.00,
    },
  ];
  