/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import Login from "./pages/Login/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import NewQuestion from "./pages/NewQuestion/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import NotFound from "./pages/NotFound/NotFound";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import NavBar from "./components/NavBar/Navbar";
import PollQuestion from "./components/PollQuestion/PollQuestion";
import PollResult from "./components/PollResult/PollResult";
import LeaderBoardCard from "./components/LeaderBoardCard/LeaderBoardCard";
import { _saveQuestion, _saveQuestionAnswer } from "./api/data";
describe("Test whole app", () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  test("Login page", () => {
    expect(<Login />).toMatchSnapshot();
    expect(getByText("Welcome to Would You Rather game!")).toBeInTheDocument();
    expect(getByText("Please sign in to continue")).toBeInTheDocument();
    const button = getByText("Sign In");
    fireEvent.click(button);
    expect(getByRole("alert")).toBeInTheDocument();
  });

  test("Home page", () => {
    expect(<Home />).toMatchSnapshot();
  });

  test("New Question page", () => {
    expect(<NewQuestion />).toMatchSnapshot();
  });

  test("Leaderboard page", () => {
    expect(<LeaderBoard />).toMatchSnapshot();
  });

  test("Not found page", () => {
    expect(<NotFound />).toMatchSnapshot();
  });

  test("Question Detail page", () => {
    expect(<QuestionDetail />).toMatchSnapshot();
  });

  test("Question Card comp", () => {
    expect(<QuestionCard />).toMatchSnapshot();
  });

  test("NavBar comp", () => {
    expect(<NavBar />).toMatchSnapshot();
  });

  test("PollQuestion comp", () => {
    expect(<PollQuestion />).toMatchSnapshot();
  });

  test("PollResult comp", () => {
    expect(<PollResult />).toMatchSnapshot();
  });

  test("LeaderBoardCard comp", () => {
    expect(<LeaderBoardCard />).toMatchSnapshot();
  });

  test("Verify _saveQuestion return value", async () => {
    const payload = {
      optionOneText: "option 1",
      optionTwoText: "option 2",
      author: "johndoe",
    };

    const result = await _saveQuestion(payload);
    expect(result.optionOne.text).toEqual("option 1");
    expect(result.optionTwo.text).toEqual("option 2");
    expect(result.author).toEqual("johndoe");
  });

  test("Very _saveQuestion return error when payload is incorrect", async () => {
    const payload = {
      param1: "option 1",
      param2: "option 2",
      param3: "johndoe",
    };

    const result = await _saveQuestion(payload).catch((error) => error);
    expect(result).toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  test("Verify _saveQuestionAnswer return value", async () => {
    const payload = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(payload);
    expect(result).toBeTruthy();
  });
  test("Verify _saveQuestionAnswer return error when payload is incorrect", async () => {
    const payload = {
      param1: "sarahedo",
      param2: "8xf0y6ziyjabvozdd253nd",
      param3: "optionOne",
    };

    const result = await _saveQuestionAnswer(payload).catch((err) => err);
    expect(result).toEqual("Please provide authedUser, qid, and answer");
  });
});
