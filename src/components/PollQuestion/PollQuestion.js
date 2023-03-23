import React from "react";
import PropTypes from "prop-types";
import {
  SegmentGroup,
  Grid,
  GridColumn,
  Form,
  FormField,
  Radio,
} from "semantic-ui-react";
import "./PollQuestion.css";
import { usePollQuestion } from "./usePollQuestion";
const PollQuestion = ({ questionData, author }) => {
  const [values, handlers] = usePollQuestion({ questionData });
  return (
    <SegmentGroup>
      <h5 className="poll-ques-author">{author.name} asks:</h5>
      <Grid divided padded>
        <GridColumn width={4}>
          <img alt="" className="poll-ques-img" src={author.avatarURL} />
        </GridColumn>
        <GridColumn width={12}>
          <h5>Would You Rather?</h5>
          <Form onSubmit={handlers.handleSubmitAnswer}>
            <FormField>
              <Radio
                label={questionData.optionOne.text}
                value="optionOne"
                checked={values.selection === "optionOne"}
                onChange={handlers.handleSelectQuestion}
              />
              <br />
              <Radio
                label={questionData.optionTwo.text}
                value="optionTwo"
                checked={values.selection === "optionTwo"}
                onChange={handlers.handleSelectQuestion}
              />
            </FormField>
            <FormField>
              {values.isDisabled ? (
                <div className="not-submmit-poll-ques-button">Submit</div>
              ) : (
                <div
                  className="poll-ques-button"
                  onClick={handlers.handleSubmitAnswer}
                >
                  Submit
                </div>
              )}
            </FormField>
          </Form>
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

PollQuestion.propTypes = {
  questionData: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PollQuestion;
