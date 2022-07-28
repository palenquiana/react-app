const addUser = async (newUser: any)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/users.json',option)
}

const deleteUser = async (user: any) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
   await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/users/${user}.json`,option)
}



const getUsers = async () => {
    const response = await fetch('https://react-app-29176-default-rtdb.firebaseio.com/users.json');
    const data = await response.json();
    return data;    
  }


const modifyUser = async (user: any, modifiedUser: any) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedUser)
  }
  await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/users/${user}.json`,option)
}




export { addUser, getUsers, modifyUser, deleteUser }