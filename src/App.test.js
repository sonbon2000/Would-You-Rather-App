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
});
