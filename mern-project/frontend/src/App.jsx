import { useState } from "react";
import "./App.css";
import User from "./pages/User";
import AddUser from "./pages/UserAdd";
import EditUser from "./pages/EditUser";
import { Routes, Route, Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginLeft: "20px" }}>
      {/* <AddUser/> */}
      <ul style={{ display: "flex", gap: "20px" }}>
        <Link to={"/user/list"}>User List</Link>
        <Link to={"/user/add"}>Add User</Link>
      </ul>

      <Routes>
        <Route path="user">
          <Route path="list" element={<User />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Route>
        <Route path="about" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
