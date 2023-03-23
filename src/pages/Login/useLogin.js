import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mapValues } from "lodash";
import { authUser } from "../../store/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

export const useLogin = () => {
  const [userId, setUserId] = useState("");
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDisabledButton = userId === "";

  const renderSignInOptions = () => {
    const signInOptionsList = [];

    mapValues(users, (user) => {
      signInOptionsList.push({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: false, src: user.avatarURL },
      });
    });
    console.log(users);

    return signInOptionsList;
  };

  const handleSelectUser = (e, { value }) => {
    setUserId(value);
  };

  const handleSignInUser = () => {
    Object.keys(users).forEach(function (key) {
      if (key === userId) {
        toast.success(`${users[key].name} login successfully`);
      }
    });
    dispatch(authUser(userId));
    const location = localStorage.getItem("location");
    if (location) {
      navigate(location);
    } else {
      navigate("/");
    }
    localStorage.setItem("auth", "auth");
  };

  return [
    { isDisabledButton, userId },
    { renderSignInOptions, handleSelectUser, handleSignInUser },
  ];
};
