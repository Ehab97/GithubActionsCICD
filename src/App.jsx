import { useState } from "react";
import "./App.css";
import UserForm from "./components/user/UserForm";
import UserList from "./components/user/UserList";

function App() {
   const [users, setUsers] = useState([]);

   const onAddUser = (user) => {
      setUsers((users) => [...users, user]);
   };

   return (
      <div className="app">
         <UserForm  onAddUser={onAddUser}/>
         <hr/>
         <UserList users={users}/>
      </div>
   );
}

export default App;
