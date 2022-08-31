import Header from '../components/Header';

const Incidents = ({ incidents }) => {
  return (
    <div className='container'>
      <Header />
      <h1>These are your most recent incidents</h1>
      <div className='container-fluid'>
        <table class='table'>
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
              return (
                <tr>
                  <th scope='row'>{incident.id}</th>
                  <td>{incident.title}</td>
                  <td>{incident.summary}</td>
                  <td>{incident.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
