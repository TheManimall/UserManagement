import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { addUser } from '../actions/action';
import { addUserOperations }  from './duck';
import { groupOperations } from '../Group/duck';
import AddUserComponent from './AddUserComponent';

class AddUserContainer extends Component {
  componentDidMount() {
    const { getGroup } = this.props;

    getGroup();
  }

  render() { 
    const { group, onAddUser } = this.props;

    return (
      <AddUserComponent
        group={group}
        onAddUser={onAddUser}
      />
    );
  }
}

console.log(addUserOperations);

const mapStateToProps = state => ({
  group: state.group.groups,
});

const mapDispatchToProps = dispatch => ({
  onAddUser: (user) => {
    dispatch(addUserOperations.addUser(user));
  },
  getGroup: () => {
    dispatch(groupOperations.getAllGroup());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserContainer);
