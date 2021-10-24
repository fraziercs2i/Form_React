import React, { useState } from 'react'; // lifting the state up 
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// we can acess username and age here in App because
//it is among Userslist and AddUsers
//and we are lifting the state up to get those attributes here.
function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name:uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
        <AddUser onAddUser = {addUserHandler} />
        <UsersList users = {usersList}/>
    </div>
  );
};

export default App;
