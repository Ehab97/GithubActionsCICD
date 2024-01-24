import React from "react";

const UserList = ({ users }) => {
   const renderedUsers = users?.map((user, index) => (
      <tr key={index} className="user-row">
         <td>{user.name}</td>
         <td>{user.email}</td>
      </tr>
   ));
   return (
      <div className="user-list-container">
         <h2>User List</h2>
         <table className="user-table">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody data-testid="users">{renderedUsers}</tbody>
         </table>
      </div>
   );
};

export default UserList;
