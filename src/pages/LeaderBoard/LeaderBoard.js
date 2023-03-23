import React from "react";
import LeaderBoardCard from "../../components/LeaderBoardCard/LeaderBoardCard";
import "./LeaderBoard.css";
import { useLeaderBoard } from "./useLeaderBoard";

const LeaderBoard = () => {
  const [values, handlers] = useLeaderBoard();

  return (
    <div className="container">
      <div className="leaderBoardContainer">
        {handlers.leaderBoardList().map((leaderBoardData, index) => (
          <LeaderBoardCard
            leaderBoardData={leaderBoardData}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
