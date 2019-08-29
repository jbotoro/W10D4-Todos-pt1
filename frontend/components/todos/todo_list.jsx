import React from 'react';
import TodoListItem from './todo_list_item';
import { receiveTodo } from '../../actions/todo_actions';
import TodoForm from "./todo_form";

class TodoList extends React.Component  {
    
    render () {
        const {todos} = this.props;
        const todoListItems = todos.map( 
            todo => <TodoListItem todo={todo} receiveTodo = {receiveTodo} />)
      return (
       <div>
           <ul>
               {todoListItems}
           </ul>
                <TodoForm receiveTodo={receiveTodo}/>
       </div>
      )
    }





}

export default TodoList;
