import React from 'react';
import swal from 'sweetalert';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

class App extends React.Component {
  state = { todos: [], showButton: true, showForm: false }

  handleClick = (e) => {
    this.setState({
      todos: [
        { title: "Aprender react", done: false },
        { title: "Mandar las tareas", done: true},
      ],
      showButton: false,
      showForm:true
    })
  }

  handleClickCrossOut = (e,i) => {
    const todos = [...this.state.todos];
    todos[i].done = !todos[i].done;
    this.setState({todos:todos})
  }

  handleClickDelete = (e,i) => {
    const todos = [...this.state.todos];
    todos.splice(i, 1);
    this.setState({todos:todos})
  }

  addTodo = (title) => {
    if(title.trim() === ''){
      swal("Error","No puede haber tareas vacías", "error");
      return
    }
    const exists = this.state.todos.find(e => title.toLowerCase() === e.title.toLowerCase());
    if (exists) {
      swal("Error",`¡La tarea "${title}" ya existe!`, "error");
      return
    }
    const todos = [...this.state.todos, {title, done:false}]
    this.setState({todos});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.todos.length} />
          <TodoList tasks={this.state.todos} crossOut={this.handleClickCrossOut} delete={this.handleClickDelete} />
          {
            this.state.showForm &&
            <Form add={this.addTodo}/>
          }
          {
            this.state.showButton &&
              <button onClick={this.handleClick} className="button init">
                Inicializar
              </button>
          }
        </div>
      </div>
    );
  }
}

export default App;
