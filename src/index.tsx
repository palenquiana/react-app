import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login, Register, SaveTask, SaveUser, ViewTasks } from "./Pages";
import { ViewCategories } from "./Pages/Categories";
import { ViewUser } from "./Pages";
import { SaveCategory } from "./Pages/Categories/SaveCategory";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Outlet />}>
          <Route index element={<ViewTasks />} />
          <Route path="save" element={<SaveTask />} />
          <Route path="save/:id" element={<SaveTask />} />
        </Route>

        <Route path="categories" element={<Outlet />}>
          <Route index element={<ViewCategories />} />
          <Route path="save" element={<SaveCategory />} />
          <Route path="save/:id" element={<SaveCategory />} />
        </Route>

        <Route path="users" element={<Outlet />}>
          <Route index element={<ViewUser />} />
          <Route path="save" element={<SaveUser />} />
          <Route path="save/:id" element={<SaveUser />} />
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
