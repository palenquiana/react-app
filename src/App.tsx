import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  fetch("https://react-app-29176-default-rtdb.firebaseio.com/tasks.json").then(
    (response) => console.log(response)
  );

  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

export default App;
