import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswerToUser } from "../../store/usersSlice";
import { addAnswerToQuestion } from "../../store/questionsSlice";
import { toast } from "react-toastify";

export const usePollQuestion = ({ questionData }) => {
  const [selection, setSelection] = useState("");
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isDisabled = selection === "";

  const handleSelectQuestion = (e, { value }) => {
    setSelection(value);
  };

  const handleSubmitAnswer = () => {
    dispatch(
      addAnswerToUser({ userId, questionId: questionData.id, selection })
    );
    dispatch(
      addAnswerToQuestion({ userId, questionId: questionData.id, selection })
    );
    toast.success("Submit successfully");
  };

  return [
    { isDisabled, selection },
    { handleSelectQuestion, handleSubmitAnswer },
  ];
};
