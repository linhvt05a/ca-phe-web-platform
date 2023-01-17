import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Admin from "../features/Admin";
import Dashboard from "../features/DashBoard";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Dashboard />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<></>} />
      </Route>
    )
  );

  export default router