import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms/Header";

export const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
