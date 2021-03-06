import "./styles.css";
import { React, Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "../Auth/Auth";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          path="/"
          exact
          render={(props) => <Home auth={this.auth} {...props} />}
        />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}
