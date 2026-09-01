return (
    <div className="container mt-5">

      <h1 className="text-center">
        API CRUD Application
      </h1>

      {/* FORM */}

      <div className="mb-4">

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

        {editId === null ? (

          <button
            className="btn btn-primary"
            onClick={addUser}
          >
            Add User
          </button>

        ) : (

          <button
            className="btn btn-warning"
            onClick={updateUser}
          >
            Update User
          </button>

        )}

      </div>

      {/* TABLE */}

      {/* USER TABLE */}

<div className="card shadow-sm mt-4">

  <div className="card-header bg-dark text-white">
    <h4 className="mb-0">User List</h4>
  </div>

  <div className="card-body">

    <div className="table-responsive">

      <table className="table table-striped table-hover table-bordered align-middle">

        <thead className="table-dark">

          <tr>
            <th style={{ width: "10%" }}>S.No.</th>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "35%" }}>Email</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>

        </thead>

        <tbody>

          {users.length > 0 ? (

            users.map((user, index) => (

              <tr key={user.id}>

                {/* SERIAL NUMBER */}
                <td className="fw-bold">
                  {index + 1}
                </td>

                {/* NAME */}
                <td>
                  {user.name}
                </td>

                {/* EMAIL */}
                <td>
                  {user.email}
                </td>

                {/* ACTION */}
                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editUser(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="text-center text-muted"
              >
                No users found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  </div>

</div>
    </div>
  );


export default App;