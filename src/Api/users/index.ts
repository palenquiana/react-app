const add = async (newUser: any)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/users.json',option)
}

const remove = async (user: any) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
   await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/users/${user}.json`,option)
}



const getAll = async () => {
    const response = await fetch('https://react-app-29176-default-rtdb.firebaseio.com/users.json');
    const data = await response.json();
    return data;    
  }


const modify = async (user: any, modifiedUser: any) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedUser)
  }
  await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/users/${user}.json`,option)
}




export const usersApi = { add, getAll, modify, remove }