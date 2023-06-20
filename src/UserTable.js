import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        // const limitedUsers = data.users.slice(0, 10); // Limit to 10 records
        // setUsers(limitedUsers);
        setUsers(data.users);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div >
      <h1>Profile Details Table</h1>
      <div className='table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Icon</th>
            <th>Name</th>
            <th>Maiden Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Username</th>
            <th>BirthDate</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt="User" style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.maidenName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.birthDate}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserTable;
