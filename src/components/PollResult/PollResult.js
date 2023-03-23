import React from "react";
import PropTypes from "prop-types";
import {
  SegmentGroup,
  Grid,
  GridColumn,
  Segment,
  Progress,
} from "semantic-ui-react";
import "./PollResult.css";
import { usePollResult } from "./usePollResult";

const PollResult = ({ questionData, author }) => {
  const [values, handlers] = usePollResult({ questionData });
  return (
    <SegmentGroup>
      <h5 className="poll-result-author">{author.name} asks:</h5>

      <Grid divided padded>
        <GridColumn width={5} verticalAlign="middle">
          <img alt="" className="poll-img" src={author.avatarURL} />
        </GridColumn>

        <GridColumn width={11}>
          <h3>Results:</h3>

          <Segment color={handlers.voteColor("optionOne")}>
            {handlers.isVote("optionOne") && handlers.renderYourVoteLabel()}
            <h5>{questionData.optionOne.text}</h5>
            <Progress
              percent={(
                (values.optionOneVotes / values.totalVotes) *
                100
              ).toFixed(0)}
              progress
              color={handlers.voteColor("optionOne")}
            />
            <p>
              {values.optionOneVotes} out of {values.totalVotes} votes
            </p>
          </Segment>

          <Segment color={handlers.voteColor("optionTwo")}>
            {handlers.isVote("optionTwo") && handlers.renderYourVoteLabel()}
            <h5>{questionData.optionTwo.text}</h5>
            <Progress
              percent={(
                (values.optionTwoVotes / values.totalVotes) *
                100
              ).toFixed(0)}
              progress
              color={handlers.voteColor("optionTwo")}
            />
            <p>
              {values.optionTwoVotes} out of {values.totalVotes} votes
            </p>
          </Segment>

          <div className="poll-button" onClick={handlers.handleGoBack}>
            Go back
          </div>
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

PollResult.propTypes = {
  questionData: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PollResult;
