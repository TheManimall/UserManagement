import React, { Component } from 'react';

class AddGroupComponent extends Component {

  state = {
    groupName: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddGroup(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      groupName: '',
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>group name:</label>
          <input
            className='name_input'
            type='text'
            onChange={this.handleInputChange}
            value={this.state.groupName}
            name='groupName'
          />
          <input
            type='submit'
          />
        </form>
      </React.Fragment>
    );
  }
}

export default AddGroupComponent;