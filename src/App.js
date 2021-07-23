import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'> {user ? <Home /> : <Register />} </Route>
        <Route exact path='/login'> {user ? <Home /> : <Login />} </Route>
        <Route exact path='/write'> {user ? <Write /> : <Register />} </Route>
        <Route exact path='/settings'> {user ? <Settings /> : <Register />} </Route>
        <Route exact path='/post/:postId'> <Single /></Route>
      </Switch>
    </Router>
  );
}

export default App;
