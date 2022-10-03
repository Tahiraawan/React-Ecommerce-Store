import QuantityInput from '../common/QuantityInput';

function CartItem({ product, state,dispatch }) {
  const cartItemData = state.cart.find((cartProduct) => {
    return cartProduct.id === product.id;
  });
 const updateCartItemQuantity=(quantity) => {
  dispatch({
    type: 'UPDATE_CART_ITEM',
    payload: {
      id: product.id,
      quantity: quantity
    }
  })
 };

  return (
    <div className="cart-item">
      <img
        src={product.image}
        alt={product.alt}
      />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>Price: <span>{product.price}</span></p>
        
        <QuantityInput quantity={cartItemData.quantity} setQuantity={updateCartItemQuantity}></QuantityInput>
      </div>
    </div>
  )
}

export default CartItem;