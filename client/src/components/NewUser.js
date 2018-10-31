import React, { Component } from 'react';

class NewUser extends Component {

  state = {
    firstName: '',
    lastName: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddUser(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
    });
  };

  render() { 
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>first name:</label>
          <input
            className='name_input'
            type='text'
            onChange={this.handleInputChange}
            value={this.state.firstName}
            name='firstName'  
          />
          <label>last name:</label>
          <input
            className='name_input'
            type='text'
            onChange={this.handleInputChange}
            value={this.state.lastName}
            name='lastName'
          />
          <input 
            type='submit'
          />
        </form>
      </React.Fragment>
    );
  }
}
 
export default NewUser;