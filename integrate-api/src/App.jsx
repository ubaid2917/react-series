import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setUserData] = useState([]);

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    if (response.status === 200) {
    }
    const data = await response.json();

    setUserData(data);
    setLoading(false);
    console.log(response);
  }

  return (
    <>
      {loading == true ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {data.length > 0 && (
            <table border="1">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  );
}

export default App;
