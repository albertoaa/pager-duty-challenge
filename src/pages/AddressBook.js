import Header from '../components/Header';
import SingleUser from '../components/SingleUser';

const AddressBook = ({ users }) => {
  return (
    <div className='container'>
      <Header />
      <h1>Pager Duty AddressBook</h1>
      <div className='container-fluid d-flex flex-column'>
        <h3>Users</h3>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <SingleUser user={user} key={user.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddressBook;
