import React, { useEffect, useState } from 'react';

const ListUsers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });

  return (
    <div>
      <h1>List Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstname} {user.lastname}
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
