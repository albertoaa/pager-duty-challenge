import './App.css';
import { useEffect } from 'react';
import { getItems } from './api/index';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    getItems('/incidents', {
      limit: 10,
      offset: 0,
      total: false,
      date_range: 'all',
    }).then((response) => console.log(response));
  }, []);

  return (
    <div className='App'>
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/incidents' element={<Incidents />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/incidents'>Incidents</Link>
      </nav>
    </>
  );
};

const Incidents = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};
export default App;
