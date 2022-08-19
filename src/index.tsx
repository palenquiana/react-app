import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import { Navbar } from "./Components";
import { ViewTasks } from "./Pages";
import { ViewCategories } from "./Pages/Categories";
import { ViewUser } from "./Pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
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
      </Route>
    </Routes>
  </BrowserRouter>
);
