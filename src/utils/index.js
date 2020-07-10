
class HelperFunctions {
    constructor(Checkout) {
      this.Checkout = Checkout;
    }
  
    bulkPriceDiscount(productSKU, { discountQty, discountedPrice }) {
      const qty = this.Checkout.getProductQty(productSKU);
  
      if (qty > discountQty) {
        this.Checkout.products[productSKU].unitPrice = discountedPrice;
      }
    }
  
    freeProduct(productSKU, { freeProductSKU }) {
      const qty = this.Checkout.getProductQty(productSKU);
  
      if (!this.Checkout.products[freeProductSKU]) {
        this.Checkout.addToCart(freeProductSKU);
      }

      this.Checkout.products[freeProductSKU].freeQty += qty;
 
      this.Checkout.products[freeProductSKU].qty = this.Checkout.getProductQty(freeProductSKU) - qty;
      
      if (this.Checkout.products[freeProductSKU].qty < 0) {
        this.Checkout.products[freeProductSKU].qty = 0;
      }      
    }

    qtyPriceDiscount(productSKU, { discountQty, discountQtyAmount }) {
      const qty = this.Checkout.getProductQty(productSKU);
  
      if (qty >= discountQty) {
        this.Checkout.products[productSKU].qty -= discountQtyAmount;
        this.Checkout.products[productSKU].freeQty = discountQtyAmount;
      }
    }
  }
  
  module.exports = HelperFunctions;
  