import React from 'react';

const GroupInfo = ({ group: { groupName, _id, createdAt } }) => (
  <div>
    <h2>{groupName}</h2>
    <h3>{_id}</h3>
    <h3>{createdAt}</h3>
  </div>
);

export default GroupInfo;