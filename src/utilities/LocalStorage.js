const getCartItems = () => {
  const cartItems = localStorage.getItem("cart");

  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
};

const saveCartToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToLS = (id) => {
  const cart = getCartItems();
  cart.push(id);
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getCartItems();
  const remaining = cart.filter((item) => item !== id);
  saveCartToLS(remaining);
};

export { addToLS, getCartItems, removeFromLS };
