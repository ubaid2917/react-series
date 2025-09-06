import { useState } from "react";
import { addUser } from "../DAL/fetch";
import { useNavigate } from "react-router";
import { Button } from 'react-bootstrap';
function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const [message,setMessage] = useState('');

  const  createUser = async () => {
     if(!name || !email  || !phone || !country){
      return setError('All fields are required')
     }  else if (!email.includes("@")) {
      return setError("Invalid email format");
     } else if (!name) {
      return setError("Name is required");
     } else if (!email) {
      return setError("Email is required");
     } else if (!phone) {
      return setError("Name is required");
     } 

    try {
      const data = {
        name,
        email,
        phone,
        country,
      };

      const response = await addUser(data);
      if(response.status === 201){
        setMessage(response?.data?.message)
        setTimeout(()=> {

            navigate('/user/list')
        }, 3000)
      }else{
        setError(response.message)
      }
      console.log("response ====>", response);
    } catch (error) {
      alert("Error adding user:", error);
    }
  };

  return (
    <>
      <h1> Add User</h1> 
      {
       error && <p style={{color: 'red'}}>{error}</p>
      } 
      {
       message && <p style={{color: 'green'}}>{message}</p>
      } 

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />{" "}
      <br /> <br />
  
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="Enter phone"
        onChange={(event) => setPhone(event.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="Enter country"
        onChange={(event) => setCountry(event.target.value)}
      />{" "}
      <br /> <br />
      <Button variant="primary" onClick={createUser}>Add User</Button>
    </>
  );
}
export default AddUser;
