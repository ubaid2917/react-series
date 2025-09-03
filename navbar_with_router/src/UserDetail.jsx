import { useLocation } from 'react-router';

function UserDetails() {
    const data = useLocation().state;

    console.log('state', data)
  return (
    <div>
      <h2>User details page</h2>   
      <h3>Id: {data.id}</h3>
      <h3>Name: {data.name}</h3>

      
    </div>
  );
}

export default UserDetails;
