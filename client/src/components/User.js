import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class User extends Component {
  render() { 
    const { firstName, lastName, id, onDeleteUser } = this.props;
    return (
      <Card className='card'>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h4>{id}</h4>
        <Link to={`/user/${id}`}>
          <Button variant="contained">Show more</Button>
        </Link>
        <Button
          variant="contained"
          onClick={() => onDeleteUser(id)}
        >
          Delete
        </Button>
      </Card>
    );
  }
}
 
export default User;

// export default ({ user: { firstName, lastName, phone, _id }, onDeleteUser }) => {
//   return (
//     <Card className='card'>
//       <h2>{firstName}</h2>
//       <h2>{lastName}</h2>
//       <h2>{phone}</h2>
//       <h4>{_id}</h4>
//       <Link to={`/user/${_id}`}>
//         <Button variant="contained">Show more</Button>
//       </Link>
//       <Button 
//         variant="contained"
//         onDeleteUser={() => onDeleteUser(_id)}
//       >
//         Delete
//       </Button>
//     </Card>
//   );
// };
