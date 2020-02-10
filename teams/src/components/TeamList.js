import React from 'react';
import Teams from './Teams';
import TeamForm from './TeamForm';
import TeamDetail from './TeamDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ShoesList extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
    <> 
    <Router>
    <h1>Teams My Shoe Closet</h1>
    <p>I like {this.props.count} teams</p>
     <ul>
       {this.props.teams.map(team => <><Teams team ={team} onDelete={this.props.onDelete}/> <Link to = {`/team/${team.id}`}>Detail</Link>
      
      <Switch>
        <Route path={`/team/${team.id}/`}>
          <TeamDetail team = {team}/>
        </Route>
      </Switch>
    
       </>)}
     </ul>
    
    <TeamForm onCreated={this.props.onCreated}/>
    </Router>
    </>
    )
  }
}

export default ShoesList;