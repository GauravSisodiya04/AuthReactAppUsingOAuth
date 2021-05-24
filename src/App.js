import "./styles.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}
