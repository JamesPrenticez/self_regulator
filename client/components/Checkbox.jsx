import React, { useState } from 'react';

function Checkbox() {
  // Declare a new state variable, which we'll call "count"
  //var color = ['black', 'green', 'red']

  //Button 1
  const [count, setCount] = useState(1);

  //Button 2
  const [color, setColor] = useState('green');
  const [textColor, setTextColor] = useState('yellow');

  function isEven(n) {
    return n % 2 == 0;
  }

  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }

  const button = () => {
    console.log(count)
    console.log(color)
    if (isEven(count) == true) {
      setColor('green')
    } else if (isOdd(count) == true) {
      setColor('red')
    }
    console.log(isEven(count))
  }

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>

      <div>
        <p>You button color is {color}</p>
        <button className='button'
          style={{ background: color, color: textColor }}
          onClick={() => {button(); setCount(count + 1) }}>
          Click here
      </button>
      </div>
    </>
  );
}

export default Checkbox


//https://reactjs.org/docs/hooks-state.html
