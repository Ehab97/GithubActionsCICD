import { useState } from "react";

function UserForm({ onAddUser }) {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();

      console.log(name, email);
      onAddUser({ name, email });
      setEmail('');
      setName('');
   };
   return (
      <form onSubmit={handleSubmit} className="user-form">
         <div className="input-container">
            <label htmlFor="name">Enter name</label>
            <input 
               value={name} 
               onChange={(e) => setName(e.target.value)} 
               id="name" 
               className="input-field"
            />
         </div>
         <div className="input-container">
            <label htmlFor="email">Enter email</label>
            <input 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               id="email" 
               className="input-field"
            />
         </div>
         <button type="submit" className="add-user-button">Add User</button>
      </form>
   );
}

export default UserForm;
