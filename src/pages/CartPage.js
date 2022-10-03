import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/cartpage/CartItem";
import { products } from "../data/products";

function CartPage({ state, dispatch }) {
  const navigate=useNavigate();
  const filteredProducts = products.filter((product) => {
    return state.cart.find((cartProduct) => cartProduct.id === product.id);
  });
  const getOrderTotal = () => {
    let total = 0;
    filteredProducts.forEach((cartItem) => {
      const quantity = state.cart.find(
        (product) => product.id === cartItem.id
      ).quantity;
      total = total + quantity * cartItem.priceInNumber;
      
    });
    return total;
  };

  const completeOrder=()=>{
    dispatch({
      type: 'COMPLETE_ORDER'
    })
    navigate('/order');
  }

  return (
    <div className="container cart-page">
      <Link to="/" className="back-link">
        <span className="material-icons-outlined">arrow_back_ios</span>
        View all products
      </Link>

      <div className="cart-items-container">
        {filteredProducts.map((product, index) => {
          return (
            <CartItem
              key={index}
              product={product}
              state={state}
              dispatch={dispatch}
            ></CartItem>
          );
        })}
      </div>

      <div className="flex-container">
        <div className="left-container">
          <div className="delivery-fee-container">
            <span>Delivery Fee:</span>
            <span>300 PKR</span>
          </div>

          <div className="total-container">
            <span>Total:</span>
            <span>{getOrderTotal()} PKR</span>
          </div>
        </div>

        <div className="right-container">
          <button onClick={completeOrder} className="complete-order">Complete Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
