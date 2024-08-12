import {cart} from '../../data/cart.js';

export function renderCheckoutHeader()
{
  const checkoutHeaderHTML = `
  <div class="header-content">
    <div class="checkout-header-left-section">
      <a href="amazon.html">
        <img class="amazon-logo" src="images/amazon-logo.png">
        <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
      </a>
    </div>

    <div class="checkout-header-middle-section">
      Checkout (<a class="return-to-home-link js-return-to-home-link"
        href="amazon.html"> ${updateCartQuantity()} items</a>)
    </div>

    <div class="checkout-header-right-section">
      <img src="images/icons/checkout-lock-icon.png">
    </div>
  </div>
  `

  const element = document.querySelector('.js-checkout-header');
  if (element) {
      element.innerHTML = checkoutHeaderHTML;
  } else {
      console.error('Element not found');
  }

}

function updateCartQuantity() 
{
  let cartQuantity=0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
  
}

