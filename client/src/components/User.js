import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class User extends Component {
  render() {
    const {firstName, lastName, phone } = this.props;
    return (
      <Card className='card'>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h2>{phone}</h2>
      </Card>
    );
  }
}


export default User;
