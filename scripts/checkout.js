import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';//runs all the code inside the file
//import '../data/backend-practice.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');//lets us control when to go to the next step
    });
  }),
  new Promise ((resolve) => {
    loadCart(()=>{
      resolve();
    });
  })

]).then((value) => {
  //console.log(value);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');//lets us control when to go to the next step
  });

}).then((value) => {
  console.log(value);
  return new Promise ((resolve) => {
    loadCart(()=>{
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/
