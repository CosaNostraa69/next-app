import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';


interface User {
    id: number;
    name: string;
    email: string;
}
interface Props {
    sortOrder: string;

}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }
    );
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(
        sortOrder === 'email' 
        ? user => user.email 
        : user => user.name
        );


    return (
        <table className='table table-bordered
  '>
            <thead>
                <tr>
                    <td>
                        <Link href="/users?sortOrder=name">Name</Link>
                    </td>
                    <td>
                        <Link href="/users?sortOrder=email">Emai</Link>
                    </td>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => <tr key={user.id}>

                    <th>{user.name}</th>
                    <th>{user.email}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable