import React from 'react'
import {connect} from 'react-redux'
import {fetchBoxes} from '../api'
import {receiveBoxes} from '../actions'

class Boxes extends React.Component { 

    componentDidMount() {
        fetchBoxes()
            .then(boxes => {
                this.props.dispatch(receiveBoxes(boxes))
            })
    }

    render() {
        // console.log(this.props.boxes[0]?.boxes[0]) optional chaining operator (if true then keep going)
        //console.log(this.props.boxes[0])
        return (
            <>
            <div>
                <ul>
                    {this.props.boxes.map(list => <li key={list}> 
                        <button>{list.boxes[0]}</button>
                        <button>{list.boxes[1]}</button>
                        <button>{list.boxes[2]}</button>
                        <button>{list.boxes[3]}</button>
                        <button>{list.boxes[4]}</button>
                    </li>)}
                </ul>
            </div>
            </>
        )
    }
}

function mapStateToProps(state){
console.log(state.boxes)
    return {
        boxes: state.boxes,
    }
}

export default connect(mapStateToProps)(Boxes)


{/* {this.props.boxes[0]?.boxes[0]} */}

