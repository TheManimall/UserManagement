import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
      <div className="container">
        <Card className="add-user">
        <form onSubmit={this.handleSubmit}>
            <TextField
              label="Group Name"
              margin="dense"
              className="input-user"
              onChange={this.handleInputChange}
              value={this.state.groupName}
              name='groupName'
              autoFocus
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

AddGroupComponent.propTypes = {
  onAddGroup: PropTypes.func.isRequired,
};

export default AddGroupComponent;