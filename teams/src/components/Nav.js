import React from 'react';
import TeamList from './TeamList';
import About from './About';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Nav extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
            </ul>
    
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/teams">
                <TeamList teams = {this.props.teams} count = {this.props.teams.length} onCreated={this.props.HomecreateNewTeam} onDelete = {this.props.deleteTeams}/>    
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </nav>
        </Router>
    )
  }
}

export default Nav;