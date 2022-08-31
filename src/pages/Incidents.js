import Header from '../components/Header';
import SingleIncident from '../components/SingleIncident';

const Incidents = ({ incidents }) => {
  return (
    <div className='container'>
      <Header />
      <h1>These are your most recent incidents</h1>
      <div className='container-fluid'>
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
