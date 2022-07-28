const addCategory = async (newCategory: any)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/categories.json',option)
}

const deleteCategory = async (category: any) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    }
   await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}



const getCategories = async () => {
    const response = await fetch('https://react-app-29176-default-rtdb.firebaseio.com/categories.json');
    const data = await response.json();
    return data;    
  }


const modifyCategory = async (category: any, modifiedCategory: any) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedCategory)
  }
  await fetch(`https://react-app-29176-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}


  export { addCategory, getCategories, modifyCategory, deleteCategory }