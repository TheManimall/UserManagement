import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, getUsersData } from '../actions/action';
import User from '../components/User';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() { 
    const { users } = this.props;
    return ( 
      <div className='container'>
        {users.map((user) => {
          return (
            <User
              user={user}
              key={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              phone={user.phone}
              _id={user._id}
            />
          );
        })}
      </div>
     );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsersData());
    }
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
