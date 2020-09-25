import React, {useState} from 'react';
import "./App.css";

function Tweet({ name, message }) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    };

    const decrement = () => {
        setCount(count-1)
    };
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of Likes</h3>
            <div>
                <button onClick={decrement}>-1</button>
                <h3>{count}</h3>
                <button onClick={increment}>+1</button>
            </div>
        </div>
    );
}

export default Tweet;