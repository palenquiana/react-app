import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login, Register, ViewTasks } from "./Pages";
import { ViewCategories } from "./Pages/Categories";
import { ViewUser } from "./Pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Outlet />}>
          <Route index element={<ViewTasks />} />
        </Route>

        <Route path="categories" element={<Outlet />}>
          <Route index element={<ViewCategories />} />
        </Route>

        <Route path="user" element={<Outlet />}>
          <Route index element={<ViewUser />} />
        </Route>

        <Route path="login" element={<Outlet />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="register" element={<Outlet />}>
          <Route index element={<Register />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
