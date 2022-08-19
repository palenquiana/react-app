import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Navbar } from "./Components";
import { ViewTasks, OutletTasks } from "./Pages";
import {
  OutletCategories,
  SaveCategory,
  ViewCategories,
} from "./Pages/Categories";
import { ViewUser, OutletUser } from "./Pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<OutletTasks />}>
          <Route index element={<ViewTasks />} />
        </Route>

        <Route path="categories" element={<OutletCategories />}>
          <Route index element={<ViewCategories />} />
          <Route path="save" element={<SaveCategory />} />
          <Route path="save/:slug" element={<SaveCategory />} />
        </Route>

        <Route path="user" element={<OutletUser />}>
          <Route index element={<ViewUser />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
