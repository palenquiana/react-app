const addTask = async (newTask: any)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/tasks.json',option)
}

const deleteTask = async (task: any) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }
   await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/tasks/${task}.json`,option)
}



const getTasks = async () => {
    const response = await fetch('https://react-app-29176-default-rtdb.firebaseio.com/tasks.json');
    const data = await response.json();
    return data;    
  }


const modifyTask = async (task: any, modifiedTask: any) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedTask)
  }
  await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/tasks/${task}.json`,option)
}




export { addTask, getTasks, modifyTask, deleteTask }