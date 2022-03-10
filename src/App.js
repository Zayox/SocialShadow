import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import ClearData from "./components/ClearData";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Banner/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/cleardata">
                    <ClearData />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
