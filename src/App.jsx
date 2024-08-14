import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { numberDecrement, numberIncrement } from "./action";

function App() {
  const data = useSelector((state) => state.setData); // Adjust based on your state shape
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Data from Redux: {data}</h1>
      <button onClick={() => dispatch(numberIncrement())}>Increment</button>
      <button onClick={() => dispatch(numberDecrement())}>Decrement</button>
    </div>
  );
}

export default App;
