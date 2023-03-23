import React from "react";
import { Divider, Form, FormInput, Segment } from "semantic-ui-react";
import "./NewQuestion.css";
import { useNewQuestion } from "./useNewQuestion";

const NewQuestion = () => {
  const [values, handlers] = useNewQuestion();
  return (
    <div className="container">
      <div className="newQuestionContainer">
        <Segment>
          <h2 className="new-ques-header">Create New Question</h2>

          <h5>Complete the question:</h5>
          <h3>Would you rather...</h3>

          <Form>
            <FormInput
              placeholder="Enter Option One Text Here"
              value={values.optionOneText}
              onChange={handlers.handleInputOptionOne}
              required
            />
            <Divider horizontal>OR</Divider>
            <FormInput
              placeholder="Enter Option Two Text Here"
              value={values.optionTwoText}
              onChange={handlers.handleInputOptionTwo}
              required
            />
            {values.isDisabled ? (
              <div className="not-submmit-login-button">Submit</div>
            ) : (
              <div
                className="login-button"
                onClick={handlers.handleSubmitAnswer}
              >
                Submit
              </div>
            )}
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default NewQuestion;
