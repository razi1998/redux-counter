import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement } from './Counter';

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  const { value } = state;
  return (
    <div className="main-text">
      <h1>Counter : {value}</h1>
      <button onClick={() => (dispatch(Increment()))}>Increment </button>
      <a> </a>
      <button onClick={() => (dispatch(Decrement()))}> Decrement</button>
    </div>
  );
}

export default App;
