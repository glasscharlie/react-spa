import React from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';



class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          teams: []
      }

      this.createNewTeams = this.createNewTeams.bind(this);
      this.deleteTeams = this.deleteTeams.bind(this);

    }

  async componentDidMount(){
    const response = await axios.get("/data/teams.json");

    this.setState({
      teamsList: response.data
  })

}
  

  createNewTeams(team){
    team.id = Date.now()
      this.setState({
        teams: this.state.teams.concat(team)
      })
  } 
  deleteTeams(deletedTeam){
      const myTeams = this.state.teams.filter(team => !team.id ===deletedTeam.id);

      this.setState({
        teams : myTeams
      })
  }

  
  render() {
    return (
      <div className="App">
        <Header greeting = "Welcome!"/>
        <Nav shoes = {this.state.teams}  onCreated={this.createNewTeams} onDelete = {this.deleteTeams}/>
        <Footer />
      </div>
    )
  }
 }
  

export default App;
