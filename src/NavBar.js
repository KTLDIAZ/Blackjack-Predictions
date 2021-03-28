import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="PowerBi">
          <Link to="/">PowerBi </Link>
        </Menu.Item>

        <Menu.Item key="Notebook">
          <Link to="/notebook">Notebook</Link>
        </Menu.Item>

        <Menu.Item key="Predictions">
          <Link to="/predictions">Predictions </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
