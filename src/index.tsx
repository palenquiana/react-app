import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Navbar } from './Components';
import { ViewTasks, AddTask, OutletTasks, EditTask } from './Pages';
import { AddCategory, OutletCategories, ViewCategories } from './Pages/Categories';
import { ViewUser,AddUser,OutletUser,EditUser } from './Pages' 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path='' element={<OutletTasks />}> 
          <Route index element={<ViewTasks />}/> 
          <Route path='tasks/add' element={<AddTask/>} />
          <Route path='tasks/edit' element={<EditTask/>} /> 
        </Route>  
    
        <Route path="categories" element={<OutletCategories />}> 
          <Route index element={<ViewCategories />}/>
          <Route path='add' element={<AddCategory />} /> 
        </Route>

        <Route path="user" element={<OutletUser />}> 
          <Route index element={<ViewUser />}/>
          <Route path='add' element={<AddUser />} /> 
          <Route path='edit' element={<EditUser />} /> 
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


