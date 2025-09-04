import { useState, useEffect } from "react";
import { getUserList } from "../DAL/fetch";

function User() {
  const [data, setData] = useState([]);
  console.log(data,'sahgdjkasdkjh')

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      
     const response = await getUserList();

      if(response.statusCode !== 200){
        
      }

      console.log("data", response);

      setData(response?.data?.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
