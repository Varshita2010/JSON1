<<<<<<< HEAD
import React from 'react'
import UseFetch from './UseFetch'
const ApiDataFetch = () => {
const {data,loading} =UseFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
        <h2>ApiDataFetch</h2>
        <hr/>
        <ul style={{textAlign:'left'}}>
            {data.map(user=>
                <li key={user.id}>{user.name} - {user.email}</li>
            )}
        </ul>
    </div>
  )
}

export default ApiDataFetch
=======
// 

import React from 'react';
import UseFetch from './UseFetch';

const ApiDataFetch = () => {
  const { data, loading } = UseFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>ApiDataFetch</h2>
      <hr />
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiDataFetch;
>>>>>>> 08c7f73628f0ea2d01e35832d88571b543cf88cb
