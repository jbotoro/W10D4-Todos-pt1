import React from 'react';

class TodoListItem  extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        const todo = this.props.todo.title
        return (
            <li>
                {todo}
            </li>
        )
    }
}


export default TodoListItem;