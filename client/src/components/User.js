import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
	componentDidMount() {
		axios.get('/api/user')
			.then(res => {
				
			})
	}
	render() { 
  	return (
			<h1>It's my user!</h1>
		);
  }
}
 
export default User;