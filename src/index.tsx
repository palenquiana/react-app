import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Navbar } from './components';
import { Categories, Tasks, Users } from './Pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Tasks />}/>
          {/* <Route path='/tasks/add'></Route> 
          <Route path='/tasks/edit'></Route> */}
        <Route path="categories" element={<Categories />}/>
        <Route path="users" element={<Users />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);


