import React, { Component } from 'react';
import Select from 'react-select';

class AddUserComponent extends Component {

  state = {
    firstName: '',
    lastName: '',
    groupId: [],
    selectedOption: null
  };

  handleSelectChange = (selectedOption) => {
    this.setState({
      selectedOption,
      groupId: selectedOption.map(el => el.value)
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddUser(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      selectedOption: null
    });
  };

  render() { 
    const { group } = this.props;
    const { groupId, selectedOption } = this.state

    const options = group.map((el) => {
      return ({
        value: el._id,
        label: el.groupName,
      });
    })

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
          <Select
            isMulti 
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={options}
          />
          <input 
            type='submit'
          />
        </form>
      </React.Fragment>
    );
  }
}
 
export default AddUserComponent;