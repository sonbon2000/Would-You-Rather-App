import { useNavigate } from "react-router-dom";
export const useQuestionCard = ({ isAnswered, questionData }) => {
  const navigate = useNavigate();

  const buttonText = isAnswered ? "View Result" : "View Poll";

  const buttonColor = isAnswered ? "#21ba45" : "#2185d0";

  const handleClickNavigation = () => {
    navigate(`/questions/${questionData.id}`);
  };

  return [{ buttonText, buttonColor }, { handleClickNavigation }];
};
