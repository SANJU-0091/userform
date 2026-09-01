import React, { useEffect, useState } from "react";

export default function UserForm({ addUser, editUser, updateUser }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Jab Edit button click ho
  useEffect(() => {

    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
      setAge(editUser.age);
    }

  }, [editUser]);

  const handleSubmit = (e) => {

    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      age: age
    };

    if (editUser) {

      updateUser({
        id: editUser.id,
        ...userData
      });

    } else {

      addUser(userData);

    }

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div className="card p-4 mb-4">

      <h3>
        {editUser ? "Update User" : "Add User"}
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button className="btn btn-primary">
          {editUser ? "Update User" : "Add User"}
        </button>

      </form>

    </div>
  );
}