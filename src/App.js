import React from "react";
import "./App.css";
import JupViewer from "./JupViewer";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Predictions from "./Predictions";

const ipynb = require("./Blackjack.ipynb");

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <iframe
            title="Blackjack dashboard"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=6f8fb420-e24f-4da9-91dd-434d76c508e8&autoAuth=true&ctid=af2fd196-1d9f-47b4-9069-391a46f83601&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
            allowFullScreen={true}
          />
        </Route>
        <Route path="/notebook">
          <JupViewer
            title="Blackjack Predictions"
            subtitle=""
            // coverImg="https://notionpress.com/blog/wp-content/uploads/2018/06/Cover-design.png"
            file={ipynb}
            // file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
          />
        </Route>
        <Route path="/predictions">
          <Predictions />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
