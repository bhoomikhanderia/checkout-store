
const HelperFunctions = require('./utils');

const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);

class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.products = {};
  }

  scan(sku) {
    
    if (this.products[sku]) {
      this.products[sku].qty += 1;
    } else {
      this.addToCart(sku);
    }
    return this;
  }

  addToCart(sku) {
   
    const product = this.pricingRules.find(rule => rule.sku === sku);

    if (!product) {
      const error = `No SKU found by the ID: ${sku}`;
      console.warn(error);
      return { error };
    }
    this.products[sku] = {
      name: product.name,
      qty: 1,
      unitPrice: product.price,
      freeQty: 0,
      totalPrice: 0,
      totalQty: 0,
    };

    return { added: sku };
  }

  getProductQty(sku, addFreeQty = false) {
    return addFreeQty
      ? this.products[sku].qty + this.products[sku].freeQty || 0
      : this.products[sku].qty;
  }

  total() {

    const helperFunctions = new HelperFunctions(this);

    let grandTotalPrice = 0;
   
    Object.keys(this.products).forEach((productSKU) => {
      const { offer } = this.pricingRules.find(pricingRule => pricingRule.sku === productSKU);

      if (offer) {
        helperFunctions[offer.type](productSKU, offer);
      }

      const productTotalPrice = round(this.products[productSKU].unitPrice * this.getProductQty(productSKU), 2);

      grandTotalPrice += productTotalPrice;

      Object.assign(this.products[productSKU], {
        totalQty: this.getProductQty(productSKU, true),
        totalPrice: productTotalPrice,
      });
    });

    // if (this.verbose) {
      this.pricingBreakdown(grandTotalPrice);
    // }

    return grandTotalPrice;
  }

  pricingBreakdown(grandTotalPrice) {
    console.log('--------------------------------------------------------------');
    Object.keys(this.products).forEach((productSKU) => {
      const { name, totalQty, totalPrice } = this.products[productSKU];
      console.log(`Product Name: ${name}, Total Qty: ${totalQty}, Total Price: ${totalPrice}`);
    });
    console.log(`Total:$${grandTotalPrice}`);
    console.log('--------------------------------------------------------------');
  }
}

module.exports = Checkout;
