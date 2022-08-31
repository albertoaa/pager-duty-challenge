import { useState } from 'react';
import Header from '../components/Header';
import SingleIncident from '../components/SingleIncident';
import AddIncident from '../components/AddIncident';

const Incidents = ({ incidents }) => {
  const [showForm, setShowForm] = useState(false);

  const createIncident = (incident) => {
    setShowForm(false);
  };
  return (
    <div className='container'>
      <Header />
      <div className='container-fluid d-flex flex-column'>
        <h1>These are your most recent incidents</h1>
        <button
          type='button'
          className='btn btn-primary w-25 align-self-end my-4'
          onClick={() => setShowForm(true)}
        >
          Add Incident
        </button>
        {showForm && <AddIncident createIncident={createIncident} />}
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Title</th>
              <th scope='col'>Summary</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => {
              return <SingleIncident incident={incident} key={incident.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
