import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Signup from './pages/signup/Signup'
import MyRings from './pages/myRings/MyRings'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/myrings">
              <MyRings/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
