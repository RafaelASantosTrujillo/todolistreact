import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.tasks.map((e, i) => 
          <Todo
            key={i}
            done={e.done}
            title={e.title} 
            crossOut = {e => props.crossOut(e, i)}
            delete = {e => props.delete(e, i)}
          />
        )
      }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  crossOut: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;
