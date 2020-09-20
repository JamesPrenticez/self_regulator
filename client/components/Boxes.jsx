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
        console.log(this.props.boxes)
        return (
            <>
            <div>
                <h4>Task List</h4>
                <ul>{this.props.boxes.map(list => <li key={list}>hi {list[0]}</li>)}</ul>
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