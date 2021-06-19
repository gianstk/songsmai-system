// import dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// styling
import './App.css';

// import components
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import SizeCalculator from './components/SizeCalculator/SizeCalculator';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>

        <Switch>
          <Route path="/calculator">
            <SizeCalculator/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>



        </Switch>
      </Router>

      


      {/* <Switch>

      </Switch> */}

    </div>
  );
}

export default App;
