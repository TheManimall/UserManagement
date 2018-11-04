import React, { Component } from 'react';

class GroupListInUser extends Component {
  render() { 
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.id}</div>
      </div>
      
    );
  }
}
 
export default GroupListInUser  ;