import { useState } from "react";
import "./App.css";
import UserForm from "./components/user/UserForm";
import UserList from "./components/user/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers((users) => [...users, user]);
  };
  console.log(import.meta.env);
  return (
    <div className="app">
      <h2>{import.meta.env.VITE_BASE_APP_NAME}</h2>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
