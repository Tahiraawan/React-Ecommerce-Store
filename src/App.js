import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ReducerPage from './pages/ReducerPage';
import { useReducer } from 'react';

// Tasks to perform
// -> Add product to cart. Save product data and quantity.
// -> Update Quantity of product in cart
// -> Clear cart when order is placed

// Define Initial State
const initialState = {
  cart: []
};

// Define a reducer function -> (state, action) => newState
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {
        cart: [
          ...state.cart,
          action.payload
        ]
      }
      case 'UPDATE_CART_ITEM':
        const cartItemIndex= state.cart.findIndex((CartItem)=>{
          return CartItem.id === action.payload.id;
        });
        const updatedCart=[...state.cart];
        updatedCart[cartItemIndex].quantity=action.payload.quantity;
        return {
          cart: updatedCart
        }

      case 'COMPLETE_ORDER': 
      return {
        cart:[]
      } 

    default:
      throw new Error('No action found');
  }
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="App">
      <Navbar state={state} />
      <Routes>
        <Route path="/" element={<Homepage state={state} dispatch={dispatch} />}></Route>
        <Route path="/product/:id" element={<ProductPage />} ></Route>
        <Route path="/cart" element={<CartPage state={state} dispatch={dispatch} />} ></Route>
        <Route path="/order" element={<OrderPage />} ></Route>

        {/* Example Route */}
        <Route path="/reducer" element={<ReducerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
