import './App.css';
import { useEffect, useState } from 'react';
import { getItems } from './api/index';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Incidents from './pages/Incidents';

const App = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getItems('/incidents', {
      offset: 0,
      total: false,
      date_range: 'all',
    }).then((response) => setIncidents(response.incidents));
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/incidents'
          element={<Incidents incidents={incidents} />}
        />
      </Routes>
    </div>
  );
};
export default App;
