import React, { useState } from 'react';

function Buttons() {
  // Declare a new state variable, which we'll call "count"
  //var color = ['black', 'green', 'red']

  //Button 1
  const [count, setCount] = useState(1);

  //Button 2
  const [color, setColor] = useState('green');
  const [textColor, setTextColor] = useState('yellow');

  //Button 3
  const [className, setClassName] = useState('neutral');


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

  const superButton = () => {
      if (count == 0) {
        setClassName('neutral')
      } else if (count == 1) {
        setClassName('pass')
      } else if (count == 2) {
        setClassName('fail')
      } 
  }

  const resetCount = () => {
    if (count >= 2) {
    setCount(0)
    }
  }

  return (
    <>
        <div>
        <h3>Button 1</h3>
        <p>You clicked {count} times</p>
        <button 
          style={{ background: "black", color: "white" }}
          onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>

      <div>
        <h3>Button 2</h3>
        <p>You button color is {color}</p>
        <button className='button'
          style={{ background: color, color: textColor }}
          onClick={() => {button(); setCount(count + 1)}}>
          Click here
      </button>
      </div>

      <div>
        <h3>Button 3</h3>
        <button className={className}
          onClick={() => {superButton(); setCount(count + 1); resetCount()}}>
          Click here
      </button>
      </div>
    </>
  );
}

export default Buttons


//https://reactjs.org/docs/hooks-state.html

// if(i & 1)
// {
//     // ODD
// }
// else
// {
//     // EVEN
// }

//Ternary: i & 1 == 1 ? console.log("odd") : console.log("even");