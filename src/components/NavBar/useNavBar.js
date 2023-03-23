import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../store/authSlice";

export const useNavBar = () => {
  const { userId } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    Object.keys(users).forEach(function (key) {
      if (key === userId) {
        toast.success(`User ${users[key].name} logout`);
      }
    });
    dispatch(logout());
    localStorage.clear();
  };

  const navigateHome = () => {
    navigate("/");
    localStorage.setItem("auth", "auth");
  };

  const navigateQuestion = () => {
    navigate("/add");
    localStorage.setItem("auth", "auth");
  };

  const navigateLeaderboard = () => {
    navigate("/add");
    localStorage.setItem("auth", "auth");
  };

  return [
    { users, userId },
    { handleLogoutUser, navigateHome, navigateQuestion, navigateLeaderboard },
  ];
};
