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

    handelClick (currentIndex) {
        console.log(currentIndex)
    }

    render() {
        return (
            <>
            <div>
                <ul>
                {this.props.boxes.map((list, index) => <li key={index}> 
                        <button onClick={() => {this.handelClick(0)}}>{list.boxes[0]}</button>
                        <button onClick={() => {this.handelClick(1)}}>{list.boxes[1]}</button>
                        <button onClick={() => {this.handelClick(2)}}>{list.boxes[2]}</button>
                        <button onClick={() => {this.handelClick(3)}}>{list.boxes[3]}</button>
                        <button onClick={() => {this.handelClick(4)}}>{list.boxes[4]}</button>
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