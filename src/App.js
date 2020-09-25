import React, {useState} from 'react'; 
import Tweet from './tweet';


function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return(
    <div className="app">
      <h1>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {/* <Tweet name="Dalinar" message="Follow the codes"/>
      <Tweet name="Adolin" message="Duel me irl"/>
      <Tweet name="Rock" message="Airsick lowlanders..."/>
      <Tweet name="Kaladin" message=":("/> */}
    </div>
  );
}

export default App;