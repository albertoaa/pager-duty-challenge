import { useState } from 'react';

const AddIncident = ({ createIncident }) => {
  const [incident, setIncident] = useState({
    title: '',
    summary: '',
  });

  const generateRandomId = () => {
    const list = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
    let res = '';
    for (let i = 0; i < 7; i++) {
      let rnd = Math.floor(Math.random() * list.length);
      res = res + list.charAt(rnd);
    }
    return res;
  };

  const handleOnChange = (event) => {
    setIncident({
      ...incident,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    const newIncident = {
      ...incident,
      ...{
        id: generateRandomId(),
        status: 'open',
      },
    };
    createIncident(newIncident);
  };

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <h3>Add a new incident</h3>
      <form className='w-50'>
        <div className='mb-3 d-flex flex-column align-items-start'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            placeholder='Incident Title'
            onChange={(event) => handleOnChange(event)}
            value={incident.title}
          />
        </div>
        <div className='mb-3 d-flex flex-column align-items-start'>
          <label htmlFor='summary' className='form-label'>
            Summary
          </label>
          <textarea
            className='form-control'
            id='summary'
            name='summary'
            rows='3'
            onChange={(event) => handleOnChange(event)}
            value={incident.summary}
          ></textarea>
        </div>
      </form>
      <button
        type='button'
        className='btn btn-success w-25 mb-5'
        onClick={submitForm}
      >
        Submit
      </button>
    </div>
  );
};

export default AddIncident;
