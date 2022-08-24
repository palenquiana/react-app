import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login, Register, ViewTasks } from "./pages";
import { ViewCategories } from "./pages/Categories";
import { ViewUser } from "./pages";
import { SaveCategory } from "./pages/Categories/SaveCategory";

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
          <Route path="save/:id" element={<SaveCategory />} />
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
