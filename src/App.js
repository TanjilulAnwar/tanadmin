import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./app.css";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          {/* <Route path="/">

          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
