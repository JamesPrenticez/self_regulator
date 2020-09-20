import React from 'react'
import {connect} from 'react-redux'
import {fetchBoxes} from '../api'
import {receiveBoxes} from '../actions'

class Boxes extends React.Component { 

    componentDidMount() {
        fetchBoxes()
            .then(callback => {
                this.props.dispatch(receiveBoxes(callback))
            })
    }

    render() {
        // console.log(this.props.boxes[0]?.boxes[0]) optional chaining operator (if true then keep going)
        console.log(this.props.boxes[0])
        return (
            <>
            <div>
                <h4>Task List</h4>
                <ul>{this.props.boxes.map(list => <li key={list}>{list?.boxes[0]}</li>)}</ul>

                {this.props.boxes[0]?.boxes[0]}

            </div>     
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        boxes: state.boxes
    }
}

export default connect(mapStateToProps)(Boxes)