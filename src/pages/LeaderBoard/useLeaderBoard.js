import { useEffect } from "react";
import { useSelector } from "react-redux";
import { mapValues, orderBy } from "lodash";
import "./LeaderBoard.css";
import { useLocation, useNavigate } from "react-router-dom";

export const useLeaderBoard = () => {
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
    localStorage.setItem("location", location.pathname);
  }, []);

  const leaderBoardList = () => {
    const leaderBoardList = [];

    mapValues(users, (user) => {
      const { name, avatarURL, answers, questions } = user;

      leaderBoardList.push({
        name,
        avatarURL,
        answeredQuestions: Object.keys(answers).length,
        createdQuestions: questions.length,
        totalScore: Object.keys(answers).length + questions.length,
      });
    });

    return orderBy(leaderBoardList, "totalScore", "desc").slice(0, 3);
  };

  return [{}, { leaderBoardList }];
};
