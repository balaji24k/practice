import React, { useState } from 'react';
import Form from './components/Users/Form';
import UserList from './components/Users/UserList';


function App() {

  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uname,uAge,uCollege) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, 
        {name : uname, age:uAge, college: uCollege, id:Math.random().toString()}
      ]
    })
  }
  
  return (
      <React.Fragment>
        <Form onAddUser={addUserHandler}></Form>
          <UserList users={usersList}></UserList>
      </React.Fragment>

  );
}

export default App;
