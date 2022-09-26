import React, { useState, useEffect } from 'react';

type User = {
  name: string;
  address: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        setUsers(data);
      } catch (err) {
        setError('problem fetching data');
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(({ name }) => (
          <div key={name}>
            <li>{name}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Users;
