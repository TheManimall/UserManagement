import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
    if(this.state.groupId.length >= 1){
      this.props.onAddUser(this.state);
      this.handleReset();
    }else {
      alert('Choose group pls');
    }
    
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
    const { selectedOption } = this.state

    const options = group.map((el) => {
      return ({
        value: el._id,
        label: el.groupName,
      });
    })

    return (
      <div className="container">
        <Card className="add-user">
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="First Name"
              margin="dense"
              className="input-user"
              name='firstName'
              onChange={this.handleInputChange}
              value={this.state.firstName}
              autoFocus
            />
            <TextField
              label="Last Name"
              margin="dense"
              name='lastName'
              className="input-user"
              onChange={this.handleInputChange}
              value={this.state.lastName}
            />
            <Select
              isMulti
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={options}
            />
            <Button 
              variant="contained" 
              type="submit" 
              color="secondary" 
              size="medium">
            Add
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

AddUserComponent.propTypes = {
  onAddUser: PropTypes.func.isRequired
};
 
export default AddUserComponent;