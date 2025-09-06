import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getOneUser, updateOneUser } from "../DAL/fetch";

function EditUser() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log("user updated:", user);
  }, [user]);

  const getUser = async () => {
    try {
      const response = await getOneUser(id);
      console.log("response", response);
      setUser(response?.data?.data);

      console.log("user", user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const updateUser = async (id, user) => {
    if (!user.name || !user.email || !user.phone || !user.country) {
      return setError("All fields are required");
    } else if (!user.email.includes("@")) {
      return setError("Invalid email format");
    } else if (!user.name) {
      return setError("Name is required");
    } else if (!user.email) {
      return setError("Email is required");
    } else if (!user.phone) {
      return setError("Name is required");
    }

    try {
      const response = await updateOneUser(id, user);
      setMessage(response?.data?.message);

      setTimeout(() => {
        navigate("/user/list");
      }, 2000);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Error fetching user:", error);
    }
  };

  return (
    <>
      <h1> Edit User</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <input
        type="text"
        placeholder="Enter Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br /> <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Enter phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Enter country"
        value={user.country}
        onChange={(e) => setUser({ ...user, country: e.target.value })}
      />
      <br /> <br />
      <Button variant="primary" onClick={() => updateUser(id, user)}>
        Add User
      </Button>
    </>
  );
}

export default EditUser;
