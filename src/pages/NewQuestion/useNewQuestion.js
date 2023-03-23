import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addNewQuestion } from "../../store/questionsSlice";
import { formatQuestion } from "../../api/data";
import { addQuestionToUser } from "../../store/usersSlice";
import { toast } from "react-toastify";

export const useNewQuestion = () => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
  }, []);

  const isDisabled = optionOneText === "" || optionTwoText === "";

  const handleInputOptionOne = (e, { value }) => {
    setOptionOneText(value);
  };

  const handleInputOptionTwo = (e, { value }) => {
    setOptionTwoText(value);
  };

  const handleSubmitAnswer = async () => {
    const newQuestion = formatQuestion({
      author: userId,
      optionOneText,
      optionTwoText,
    });

    dispatch(addNewQuestion(newQuestion));
    dispatch(addQuestionToUser({ userId, questionId: newQuestion.id }));
    toast.success("Question add successfully");
    navigate("/");
  };
  let location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
    localStorage.setItem("location", location.pathname);
  }, []);

  return [
    { isDisabled, optionOneText, optionTwoText },
    { handleInputOptionOne, handleInputOptionTwo, handleSubmitAnswer },
  ];
};
