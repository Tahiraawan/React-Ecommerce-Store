import { Link } from 'react-router-dom';

function OrderPage() {
  return (
    <div className="container">
      <h1>Thankyou for submitting your order</h1>
      <Link to="/" className="back-link">Continue Shopping</Link>
    </div>
  )
}

export default OrderPage;