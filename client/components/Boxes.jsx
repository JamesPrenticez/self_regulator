import React from 'react'
import {connect} from 'react-redux'
import {fetchBoxes} from '../api'
import {receiveBoxes} from '../actions'

// var WWW = 'neutral'

// var balls = "1,2,2,3,34,4,4,5,5,5,5,99"
// var sack = JSON.parse(balls, array)
class Boxes extends React.Component { 
        state = {
            boxState0: ['pass', 'pass', 'pass', 'pass', 'pass'],
            boxState1: ['fail', 'fail', 'fail', 'fail', 'fail'],
            boxState2: ['neutral', 'neutral', 'neutral', 'neutral', 'neutral'],
        }

    componentDidMount() {
        fetchBoxes()
            .then(boxes => {
                this.props.dispatch(receiveBoxes(boxes))
            })
            .then(()=>{
                let row = 0
                let a = this.state.boxState0.slice
                a = this.props.boxes[`${row}`].boxes
                this.setState({boxState: a})

                // var array = JSON.parse('[' + this.props.boxes[0].boxes + ']')
                // console.log(array)

            })
    }

    handelClick (rowIndex, columnIndex, ref) {
        let boxSelector = `boxState${+rowIndex+'['+columnIndex+']'}`
        let advancedBoxSelector = `this.state.boxState${+rowIndex+'['+columnIndex+']'}`

        console.log(boxSelector)
        console.log(eval(advancedBoxSelector))
        console.log(ref)
        //should use window.Function for security purposes

        if (eval(advancedBoxSelector) === 'neutral'){
            this.setState({boxSelector: 'pass'})
            ref.style={backgroundColor: 'green'}
        } else if (eval(advancedBoxSelector) === 'pass'){
            this.setState({boxSelector: 'fail'})
            this.setState({boxColor: 'red'})
        } else if (eval(advancedBoxSelector) === 'fail'){
            this.setState({boxSelector: 'neutral'})
            this.setState({boxColor: 'white'})
        } else  console.log("error")
    }

    render() {
        
         return (
            <>
            <div>

                <ul>
                
                {this.props.boxes.map((list, rowIndex) =>
                  <li key={rowIndex}>
                  {console.log('rowIndex: ' + rowIndex)}

                        <ul style={{display: 'flex'}}>
                            {list.boxes.map((item, columnIndex) =>
                                <li key={columnIndex}>
                                {console.log('columnIndex: ' + columnIndex)}
                                    <button 
                                        ref = {rowIndex+columnIndex}
                                        onClick={() => {this.handelClick(rowIndex, columnIndex)}} 
                                        style={{backgroundColor: `${this.state.boxColor}`}}>
                                        {item}                          
                                    </button>
                                </li>)}
                            </ul>  

                    </li>)}
                </ul>
            </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        boxes: state.boxes,
    }
}

export default connect(mapStateToProps)(Boxes)