import React from 'react';

const UserInfo = ({user: { firstName, lastName, _id, createdAt }}) => (
  <div>
    <h3>{firstName}</h3>
    <h3>{lastName}</h3>
    <h3>{_id}</h3>
    <h3>{createdAt}</h3>
  </div>
);

export default UserInfo;