import React, { useState } from 'react';

function Checkbox() {
  const [count, setCount] = useState(1);
  const [className, setClassName] = useState('neutral');
  const [marker, setMarker] = useState('neutral');

  const superButton = () => {
      if (count == 0) {
        setClassName('neutral')
        setMarker('neutral')
      } else if (count == 1) {
        setClassName('pass')
        setMarker('pass')
      } else if (count == 2) {
        setClassName('fail')
        setMarker('fail')
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
        <h3>Super Button</h3>
        <button className={className}
          onClick={() => {superButton(); setCount(count + 1); resetCount()}}>
          {marker}
      </button>
      </div>
      <div>
        <h3>Super Button</h3>
        <button className={className}
          onClick={() => {superButton(); setCount(count + 1); resetCount()}}>
          {marker}
      </button>
      </div>
    </>
  );
}

export default Checkbox


