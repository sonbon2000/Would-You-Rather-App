import React from "react";
import { SegmentGroup, Grid, GridColumn } from "semantic-ui-react";
import "./QuestionCard.css";
import { useQuestionCard } from "./useQuestionCard";

const QuestionCard = ({ questionData, author, isAnswered }) => {
  const [values, handlers] = useQuestionCard({ isAnswered, questionData });

  return (
    <SegmentGroup>
      <h5 className="ques-card-header">{author.name} asks:</h5>
      <Grid divided padded>
        <GridColumn width={4}>
          <img alt="" className="ques-card-img" src={author.avatarURL} />
        </GridColumn>
        <GridColumn width={12}>
          <h5>Would You Rather?</h5>
          <p>... {questionData.optionOne.text} ...</p>
          <div
            className="ques-card-button"
            style={{ background: values.buttonColor }}
            onClick={handlers.handleClickNavigation}
          >
            {values.buttonText}
          </div>
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

export default QuestionCard;
