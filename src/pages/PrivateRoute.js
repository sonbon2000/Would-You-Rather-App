import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar/Navbar";

const PrivateRoutes = () => {
  const { userId } = useSelector((state) => state.auth);

  const isUser = userId !== "";

  return isUser ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
