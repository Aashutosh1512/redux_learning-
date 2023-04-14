import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reduxstore/slice/createslice'

function Counter() {
  const count = useSelector((state) => state.counter.value);

  // state.counter.value ,means  , go in createslice see that name==counter and in which the initial state is value okay ... good 
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;



// provider main store pass karna padega sabse pehle jo ki index.js me rhega 

