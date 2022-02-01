import React, { useEffect, useState } from 'react';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users]);

  const handleDelete = (id) => {
    // e.preventDefault();
    var users;
    fetch(`http://localhost:3001/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        users = data;
      });
    setUsers([...users, users]);
  };

  return (
    <div>
      <h1>List Users</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user._id}
            style={{
              display: 'flex',
              gap: 20,
              padding: '10px',
              margin: 20,
              backgroundColor: '#fafafa',
            }}
          >
            <div style={{ flex: 1 }}>
              {user.firstname} {user.lastname}
            </div>
            <div style={{ flex: 1 }}>{user.email}</div>

            <div style={{ flex: 1 }}>{user.createdAt}</div>
            <div style={{ alignSelf: 'end' }}>
              <button>Edit</button>
              <button onClick={() => handleDelete(user._id)} type="button">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Users not found</div>
      )}
    </div>
  );
};

export default ListUsers;
