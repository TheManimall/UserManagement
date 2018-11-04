import React, { Component } from 'react';
import Select from 'react-select';

class AddUserToGroup extends Component {

  state = {
    userId: null,
    groupId: this.props.id,
  };

  handleSelectChange = (userId) => {
    this.setState({
      userId,
      groupId: this.props.id
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddUserToGroup(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      userId: null
    });
  };

  render() {
    const { user } = this.props;
    const { userId } = this.state

    const options = user.map((el) => {
      return ({
        value: el._id,
        label: `${el.firstName} ${el.lastName}`,
      });
    });

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Select
            value={userId}
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

export default AddUserToGroup;