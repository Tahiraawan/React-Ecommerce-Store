import { useReducer } from 'react';

const initialState = {
  counter: 0
};

// const someAction = {
//   type: 'increment',
//   payload: '' // optional
// }

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }

    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      throw new Error('Action not found');
  }
};

function ReducerPage(){

  // Tasks To Perform:
  // -> Increment number by 1 => + 1
  // -> Decrement number by 1 => - 1
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>useReducer Example</h1>

      <div className="quantity-container">
      <button onClick={() => dispatch({ type: 'decrement' })}>
        <span class="material-icons-outlined">
          remove
        </span>
      </button>
      <input type="number" min="0" value={state.counter} />
      <button onClick={() => dispatch({ type: 'increment' })}>
        <span class="material-icons-outlined">
          add
        </span>
      </button>
    </div>
    </div>
  )
}

export default ReducerPage;