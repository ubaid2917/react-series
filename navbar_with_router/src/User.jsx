import { useNavigate } from "react-router";

function User() {
  const navigate = useNavigate();
  const userData = [
    { id: 1, name: "Ubaid" },
    { id: 2, name: "Rehan" },
    { id: 2, name: "Sadiq" },
    { id: 2, name: "Ali" },
    { id: 2, name: "Arslan" },
  ];
  return (
    <div>
      <h2>User page</h2>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <h3 onClick={() => navigate(`/user/${user.id}`, {state: user})}>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default User;
