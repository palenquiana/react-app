import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Navbar } from './Components';
import { Categories,ViewTasks, Users, AddTask, OutletTasks } from './Pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}> / 
        <Route path='' element={<OutletTasks />}> /
          <Route index element={<ViewTasks />}/> /
          <Route path='tasks/add' element={<AddTask/>} /> /tasks/add
        </Route>  
          {/* <Route path='/tasks/edit'></Route>  */}
        {/* <Route path="categories" element={<OutletCategories />}> /categories
          <Route index element={<ViewCategories />}/> /categories
          <Route path='/add' element={<AddCategory />} /> /categroies/add
        </Route> */}

        <Route path="users" element={<Users />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);


