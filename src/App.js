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
import NotFound from "./pages/NotFound/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { _getQuestions, _getUsers } from "./api/data";
import { receiveUsers } from "./store/usersSlice";
import { receiveQuestions } from "./store/questionsSlice";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initializeDataApp = async () => {
    const users = await _getUsers();
    const questions = await _getQuestions();

    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };

  useEffect(() => {
    initializeDataApp();
    localStorage.removeItem("auth");
  }, [dispatch]);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
  }, []);

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
