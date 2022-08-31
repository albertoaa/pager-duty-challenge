import React from 'react';

const SingleIncident = ({ user }) => {
  return (
    <tr>
      <th scope='row'>{user.id}</th>
      <td>{user.name}</td>
    </tr>
  );
};

export default SingleIncident;
