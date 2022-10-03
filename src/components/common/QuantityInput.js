function QuantityInput({ quantity, setQuantity }) {
  return (
    <div className="quantity-container">
      <button disabled={!quantity} onClick={() => setQuantity(quantity - 1)}>
        <span className="material-icons-outlined">
          remove
        </span>
      </button>
      <input type="number" min="0" value={quantity} onChange={() => {}} />
      <button onClick={() => setQuantity(quantity + 1)}>
        <span className="material-icons-outlined">
          add
        </span>
      </button>
    </div>
  )
}

export default QuantityInput;