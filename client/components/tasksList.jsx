import React from 'react'
import {connect} from 'react-redux'

import {fetchTasks} from '../api'
import {receiveTasks} from '../actions'
import TaskListItem from './taskListItem'

class TaskList extends React.Component { 

    componentDidMount(){
        fetchTasks()
            .then(task => {
                this.props.dispatch(receiveTasks(task))
            })
    }

    render() {
          return (
        <>
            <h2>Tasks</h2>               
            <ul>
                {this.props.tasks.map(task => <li key={task.id}><TaskListItem task={task} /></li>)}
            </ul>
        </>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)