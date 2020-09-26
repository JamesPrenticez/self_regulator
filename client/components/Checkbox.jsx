import React, { useState } from 'react';
import {connect} from 'react-redux'
import { CHANGE_BOX } from '../actions';

function Checkbox(props) {
  const arr = props.data

  console.log(arr)



    return (
      <>
           <button onClick={props.viewPass}>Pass</button>
      </>
    );
  }


function mapStateToProps(state){
console.log(state.box)
    return {
        box: state.box
    }
}

function mapDispatchToProps(dispatch) {
  return {
    viewPass: () => dispatch({ type: 'CHANGE_BOX', box: 'pass'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)





        {/* <div>
          <button className={className} onClick={() => { superButton(); setCount(count + 1); resetCount() }}>{marker}</button>
        </div>
        <div>
          <button className={className} onClick={() => { superButton(); setCount(count + 1); resetCount() }}>{marker}</button>
        </div> */}




  // const [count, setCount] = useState(1);
  // const [className, setClassName] = useState('neutral');
  // const [marker, setMarker] = useState('neutral');


  //   const superButton = () => {
  //     if (count == 0) {
  //       setClassName('neutral')
  //       setMarker('neutral')
  //     } else if (count == 1) {
  //       setClassName('pass')
  //       setMarker('pass')
  //     } else if (count == 2) {
  //       setClassName('fail')
  //       setMarker('fail')
  //     }
  //   }

  //   const resetCount = () => {
  //     if (count >= 2) {
  //       setCount(0)
  //     }
  //   }





  // const magicButton = () => {
  //   for (let i = 0; i < arr.length; arr[i]++) {
  //     if (arr[i] == 'neutral') {
  //       // setCount(0)
  //       // setClassName('neutral')
  //       // setMarker('neutral')
  //       console.log('NEUTRAL')
  //     } else if (arr[i] == 'pass') {
  //       // setCount(1)
  //       // setClassName('pass')
  //       // setMarker('pass')
  //       console.log('PASS')
  //     } else if (arr[i] == 'fail') {
  //       // setCount(3)
  //       // setClassName('fail')
  //       // setMarker('fail')
  //       console.log('FAIL')
  //     } else break
  //   }
  // }
//       } 
//     console.log(i)
//     }
//   }