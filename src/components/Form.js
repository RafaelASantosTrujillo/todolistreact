import React from 'react';
import '../css/form.css';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title : ''
    }
  }
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.title);
    this.setState({ title: '' });
  }
  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Agrega una tarea'
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button className='button'>Enviar</button>
      </form>
    )
  }
};

export default Form;
