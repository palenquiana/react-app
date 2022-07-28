import React from 'react';
import { Outlet } from 'react-router-dom';

const Tasks = () => {

    return (
        <div className="page tasks">
           Tareas
           <Outlet />
        </div>
     
    )
}

export { Tasks }