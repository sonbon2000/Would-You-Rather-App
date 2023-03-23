import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Label, Icon } from "semantic-ui-react";

export const usePollResult = ({ questionData }) => {
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const optionOneVotes = questionData.optionOne.votes.length;
  const optionTwoVotes = questionData.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const isVote = (option) => {
    return questionData[option].votes.includes(userId);
  };

  const voteColor = (option) => {
    return questionData[option].votes.includes(userId) ? "green" : "grey";
  };

  const renderYourVoteLabel = () => {
    return (
      <Label color="yellow" ribbon="right">
        <Icon name="check circle outline" size="big" />
        <p style={{ float: "right" }}>Your Vote</p>
      </Label>
    );
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return [
    { optionOneVotes, optionTwoVotes, totalVotes },
    { isVote, voteColor, renderYourVoteLabel, handleGoBack },
  ];
};
