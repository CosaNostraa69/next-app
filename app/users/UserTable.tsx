import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
  }

const UserTable = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store'}
    );
    const users: User[] = await res.json();
  return (
            <table className='table table-bordered
  '>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      {users.map(user => <tr key={user.id}>

        <th>{user.name}</th>
        <th>{user.email}</th>
      </tr>)}
      </tbody>
    </table>
  )
}

export default UserTable