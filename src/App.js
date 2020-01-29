// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Ckeditor from './components/Ckeditor'
class App extends Component {
  
  render() {
    return (
    <Router>
        <div><center>
          <h2 >React Sample Application</h2>
          <nav className="navbar navbar-light bg-primary fixed-top">
          {/* <ul className="navbar-nav mr-auto">
          </ul> */}
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
               <Route path ='/Dashboard' component={Dashboard} /> 
               <Route path ='/Ckeditor' component = {Ckeditor}/>
          </Switch>
          </center>
        </div>
      </Router>
    );
  }
}

export default App;