import React from 'react'
import {connect} from 'react-redux'
import {fetchTasks} from '../api'
import {receiveTasks} from '../actions'

class TasksList extends React.Component { 

    componentDidMount() {
        fetchTasks()
            .then(tasks => {
                this.props.dispatch(receiveTasks(tasks))
            })
    }

    render() {
        console.log(this.props.tasks)
        return (
            <>
            <div>
                <h4>Task List</h4>
                <ul>{this.props.tasks.map(list => <li key={list.id}>{list.task} {list.boxes}</li>)}</ul>
            </div>     
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TasksList)