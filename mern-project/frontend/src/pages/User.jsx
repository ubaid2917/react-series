import { useState, useEffect } from "react";
import { getUserList, deleteUser } from "../DAL/fetch";
import { useNavigate } from "react-router";

function User() {
  const [data, setData] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await getUserList();

      if (response.statusCode !== 200) {
      }
      setData(response?.data?.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await deleteUser(id);
      console.log("response", response);

      if (response.data.success !== false) {
        alert("Deleted Successfully");
        getUser();
      }
    } catch (error) {
      console.log("error", error);
    }
  }; 

  const handleEdit = async (id) => {
    try {
       navigate(`/user/edit/${id}`)
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h1>User</h1>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone || "N/A"} </td>
              <td>{user.country}</td>
              <td>{user.createdAt}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
