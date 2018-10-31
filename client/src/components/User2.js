import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class User extends Component {
  render() {
    const {firstName, lastName, phone, _id, onDeleteUser } = this.props;
    return (
      <Card className='card'>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h2>{phone}</h2>
        <Button 
          variant="fab" 
          aria-label="Delete" 
          onClick={(_id) => onDeleteUser(_id)}
        >
          <DeleteIcon />
        </Button>
      </Card>
    );
  }
}


export default User;
