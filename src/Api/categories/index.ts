const add = async (newCategory: any)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/categories.json',option)
}

const remove = async (category: any) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    }
   await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}



const getAll = async () => {
    const response = await fetch('https://react-app-29176-default-rtdb.firebaseio.com/categories.json');
    const data = await response.json();
    return data;    
  }


const modify = async (category: any, modifiedCategory: any) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedCategory)
  }
  await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}


  export const categoriesApi = { add, getAll, modify, remove }