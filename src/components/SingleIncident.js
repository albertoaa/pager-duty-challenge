import React from 'react';

const SingleIncident = ({ incident }) => {
  return (
    <tr>
      <th scope='row'>{incident.id}</th>
      <td>{incident.title}</td>
      <td>{incident.summary}</td>
      <td>{incident.status}</td>
    </tr>
  );
};

export default SingleIncident;
