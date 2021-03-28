import React from "react";
import "./App.css";
import JupViewer from "./JupViewer";

const ipynb = require("./Blackjack.ipynb");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JupViewer
          title="Jupyter as a Blog!"
          subtitle="I've always wanted to publish my jupyter notebooks as blogs. Finally I can."
          // coverImg="https://notionpress.com/blog/wp-content/uploads/2018/06/Cover-design.png"
          file={ipynb}
          //file="https://raw.githubusercontent.com/jakevdp/PythonDataScienceHandbook/master/notebooks/00.00-Preface.ipynb"
          // file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
        />
        <iframe
          title="Blackjack dashboard"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=6f8fb420-e24f-4da9-91dd-434d76c508e8&autoAuth=true&ctid=af2fd196-1d9f-47b4-9069-391a46f83601&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    );
  }
}

export default App;
