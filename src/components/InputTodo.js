import React, { Component } from 'react'

export class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add todo..."
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputTodo