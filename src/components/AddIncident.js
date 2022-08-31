import React from 'react';

const AddIncident = ({ createIncident }) => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <h3>Add a new incident</h3>
      <form className='w-50'>
        <div className='mb-3 d-flex flex-column align-items-start'>
          <label for='title' class='form-label'>
            Title
          </label>
          <input
            type='text'
            class='form-control'
            id='title'
            name='title'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3 d-flex flex-column align-items-start'>
          <label for='summary' class='form-label'>
            Summary
          </label>
          <textarea
            class='form-control'
            id='summary'
            name='summary'
            rows='3'
          ></textarea>
        </div>
      </form>
      <button
        type='button'
        className='btn btn-success w-25 mb-5'
        onClick={createIncident}
      >
        Submit
      </button>
    </div>
  );
};

export default AddIncident;
