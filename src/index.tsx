import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from './App';
import { Navbar } from './Components';
import { ViewTasks, AddTask, EditTask } from './Pages';
import { AddCategory, EditCategory, ViewCategories } from './Pages/Categories';
import { ViewUser,AddUser,EditUser } from './Pages' 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path='' element={<Outlet />}> 
          <Route index element={<ViewTasks />}/> 
          <Route path='tasks/add' element={<AddTask/>} />
          <Route path='tasks/edit/:id' element={<EditTask/>} /> 
        </Route>  
    
        <Route path="categories" element={<Outlet />}> 
          <Route index element={<ViewCategories />}/>
          <Route path='add' element={<AddCategory />} /> 
          <Route path='edit' element={<EditCategory />} /> 
        </Route>

        <Route path="user" element={<Outlet />}> 
          <Route index element={<ViewUser />}/>
          <Route path='add' element={<AddUser />} /> 
          <Route path='edit' element={<EditUser />} /> 
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


