import React, {useState} from 'react'; 
import Tweet from './tweet';


function App(){

  // const [isBlue, setBlue] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setBlue(!isBlue);
  // };

  const [users, setUsers] = useState([
    { name: "Dalinar", message: "Follow the codes"},
    { name: "Adolin", message: "Duel me irl"},
    { name: "Rock", message: "Airsick lowlanders..."},
    { name: "Kaladin", message: ":/"}
  ]);

  return(
    <div className="app">
      {/* <h1 className={isBlue ? "blue" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* <Tweet name="Dalinar" message="Follow the codes"/>
      <Tweet name="Adolin" message="Duel me irl"/>
      <Tweet name="Rock" message="Airsick lowlanders..."/>
      <Tweet name="Kaladin" message=":("/> */}
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;