import React from 'react'
import {connect} from 'react-redux'

function TaskListItem({toDo, dispatch}) {
    return (
        <div className="task">
            <p className="name">{toDo.task}</p>
            <p className="description">{toDo.user_id}</p>
            <p className="boxes">{toDo.boxes}</p>
        </div>
    )
}

export default connect()(TaskListItem)

{/* <a href="#" className="cart-link" onClick={() => dispatch(addToCart(wine.id, wine.name))}>Add to cart</a> */}