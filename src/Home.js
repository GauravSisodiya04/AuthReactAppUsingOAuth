import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <button onClick={this.props.auth.login}>Login</button>
      </div>
    );
  }
}

export default Home;
