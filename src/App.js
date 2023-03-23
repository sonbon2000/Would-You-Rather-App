import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./pages/PrivateRoute";
import Home from "./pages/Home/Home";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Login from "./pages/Login/Login";
import NewQuestion from "./pages/NewQuestion/NewQuestion";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/question/:questionId" element={<QuestionDetail />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
