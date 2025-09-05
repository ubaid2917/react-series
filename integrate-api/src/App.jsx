import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./pages/Userlist";
import UserAdd from "./pages/Useradd";
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <>     
    <div>
      <ul>
        <li style={{ display: "flex", gap: "10px" }}>
          <Link to={"/"}>User List</Link>
          <Link to={'/add'}>Add User</Link>
        </li>
      </ul>
    </div>
      
     
      {/* <UserList /> */}
      {/* <UserAdd /> */}

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </>
  );
}

export default App;
