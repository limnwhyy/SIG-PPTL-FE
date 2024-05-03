import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import MainRoute from "./routes/MainRoute";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AboutUsPage from "./pages/AboutUsPage";
import CatalogRoute from "./routes/CatalogRoute";
import LoginPage from "./pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";
import AdminPerguruanTinggiPage from "./pages/AdminPerguruanTinggiPage";
import AdminInputData from "./pages/AdminInputData";
import PerguruanTinggiRoute from "./routes/PerguruanTinggiRoute";
import AdminPerguruanTinggiEdit from "./pages/AdminPerguruanTinggiEdit";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainRoute />}>
        <Route index element={<HomePage />} />
        <Route path="persebaran" element={<CatalogRoute />}>
          <Route index element={<CatalogPage />} />
        </Route>
        <Route path="tentang" element={<AboutUsPage />} />
      </Route>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="perguruan-tinggi" element={<PerguruanTinggiRoute />}>
          <Route index element={<AdminPerguruanTinggiPage />} />
          <Route path="edit/:id" element={<AdminPerguruanTinggiEdit />} />
        </Route>
        <Route path="input-data" element={<AdminInputData />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
