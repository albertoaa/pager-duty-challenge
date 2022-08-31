import './App.css';
import { useEffect, useState } from 'react';
import { getItems } from './api/index';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Incidents from './pages/Incidents';
import AddressBook from './pages/AddressBook';

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [users, setUsers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [more, setMore] = useState(false);

  const getIncidents = () => {
    getItems('/incidents', {
      offset: 0,
      total: false,
      date_range: 'all',
    }).then((response) => setIncidents(response.incidents));
  };

  const getUsers = (offset) => {
    getItems('/users', {
      offset: offset,
      total: true,
      date_range: 'all',
    }).then((response) => {
      const allUsers = [...users, ...response.users];
      console.log(allUsers.length);
      setUsers(allUsers);
      if (response.more) {
        setOffset((offset += 25));
      }
    });
  };

  useEffect(() => {
    getIncidents();
  }, []);

  useEffect(() => {
    getUsers(offset);
  }, [offset]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/incidents'
          element={
            <Incidents
              incidents={incidents}
              setIncidents={(newIncidents) => setIncidents(newIncidents)}
            />
          }
        />
        <Route path='/users' element={<AddressBook users={users} />} />
      </Routes>
    </div>
  );
};
export default App;
