import React from "react";
import "./QuestionDetail.css";
import PollResult from "../../components/PollResult/PollResult";
import PollQuestion from "../../components/PollQuestion/PollQuestion";
import { useQuestionDetail } from "./useQuestionDetail";

const QuestionDetail = () => {
  const [values] = useQuestionDetail();
  return (
    <div className="container">
      <div className="questionContainer">
        {values.isValidQuestion &&
          (!values.isAnsweredQuestion ? (
            <PollQuestion
              questionData={values.questions[values.questionId]}
              author={values.users[values.questions[values.questionId].author]}
            />
          ) : (
            <PollResult
              questionData={values.questions[values.questionId]}
              author={values.users[values.questions[values.questionId].author]}
            />
          ))}
      </div>
    </div>
  );
};

export default QuestionDetail;
