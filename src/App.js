import React, { useState, useEffect } from 'react'
import Userform from './api/crud/userform';
import Usertable from './api/crud/usertable'; 


export default function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 21
    },
    {
      id: 2,
      name: "Suraj",
      email: "suraj@gmail.com",
      age: 19
    },
  ]);

  const [editUser, setEditUser] = useState(null);

  //Create

  const addUser = (user) => {
    const newUser = {
      id: Date.now(),
      ...user
    };

    setUsers([...users, newUser]);
  };

  //Delete

  const deleteuser = (id) => {
    const updateUser = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(updateUser);
  };

  //Edit

  const startedit = (user) => {
    setEditUser(user)
  };

  //Update
  const updateuser = (updateUser) => {
    const updateUsers = users.map((user) => {
      if (user.id === updateUser.id) {
        return updateUser
      }

      return user;
    });

    setUsers(updateUsers)
    setEditUser(null);
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>
        User CRUD Application
      </h1>

      <Userform
        addUser={addUser}
        editUser={editUser}
        updateuser={updateuser}
      />

      <Usertable
        users={users}
        deleteuser={deleteuser}
        startedit={startedit}
      />


    </div>
  );
}