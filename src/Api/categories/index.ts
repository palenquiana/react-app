import { Category } from "../../Pages/Categories/type-category"
import { mapToArray } from "../helpers"

const add = async (newCategory: Category)=>{
    const option: RequestInit = {
    method: 'POST',
    body: JSON.stringify(newCategory)
  }
   await fetch('https://react-app-29176-default-rtdb.firebaseio.com/categories.json',option)
}

const remove = async (category: Category) => {
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
    return mapToArray(data);    
  }


const modify = async (category: Category, modifiedCategory: Category) => {
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