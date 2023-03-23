import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./QuestionDetail.css";

export const useQuestionDetail = () => {
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
    localStorage.setItem("location", location.pathname);
  }, []);

  const { questionId } = useParams();
  const { users } = useSelector((state) => state.users);
  const { userId } = useSelector((state) => state.auth);
  const { questions } = useSelector((state) => state.questions);

  const isAnsweredQuestion = useMemo(() => {
    return Object.keys(users[userId].answers).includes(questionId);
  }, [questionId, userId, users]);

  const isValidQuestion = useMemo(() => {
    return Object.keys(questions).includes(questionId);
  }, [questions, questionId]);

  useEffect(() => {
    if (!isValidQuestion) {
      navigate("/notfound");
    }
  }, [navigate, isValidQuestion]);

  return [
    { isAnsweredQuestion, isValidQuestion, questions, questionId, users },
  ];
};
