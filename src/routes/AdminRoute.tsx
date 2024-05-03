import { ILocalStorageToken } from "../constants/interfaces";
import { Navigate, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import { useLocalStorage } from "usehooks-ts";
import "./AdminRouteStyle.css";

const AdminRoute = () => {
  const [value] = useLocalStorage<ILocalStorageToken>("token", {
    access_token: "",
  });

  return (
    <>
      {value.access_token ? (
        <div className="admin-page">
          <NavbarAdmin />
          <Outlet />
        </div>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </>
  );
};

export default AdminRoute;
