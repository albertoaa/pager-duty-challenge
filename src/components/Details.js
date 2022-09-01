import React from 'react';

const Details = ({ showModal, user }) => {
  return (
    <div>
      <h2>test</h2>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal title</h5>
            <button type='button' className='close' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
            <button type='button' className='btn btn-secondary'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
