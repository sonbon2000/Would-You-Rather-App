import React from "react";
import { Tab } from "semantic-ui-react";

import "./Home.css";

import { useHome } from "./useHome";

const Home = () => {
  const [values] = useHome();

  return (
    <div className="container">
      <div className="homeContainer">
        <Tab panes={values.panes} menu={{ secondary: true, pointing: true }} />
      </div>
    </div>
  );
};

export default Home;
