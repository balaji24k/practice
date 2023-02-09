import React, { useState } from 'react';
import Form from './components/Users/Form';
import UserList from './components/Users/UserList';

function App() {

  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uname,uAge) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, 
        {name : uname, age:uAge, id:Math.random().toString()}
      ]
    })
  }
  
  return (
      <div>
        <Form onAddUser={addUserHandler}></Form>
          <UserList users={usersList}></UserList>
      </div>

  );
}

export default App;
