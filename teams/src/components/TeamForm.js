import React from 'react';

class TeamForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            formItem: ""
        };
        this.createTeam = this.createTeam.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    createTeam(event){
        event.preventDefault();
        this.props.onCreated({name: this.state.formItem})
        this.setState({
            formItem: ""
        })
        
    }
    handleInputChange(event) {
      event.preventDefault()
  
      this.setState({
          formItem: event.target.value
        });
    }
    render() {
      return(
        <form onSubmit={this.createTeam}>
            <fieldset>
            <label>Add:</label>
            <input type="text" value={this.state.formItem} onChange={this.handleInputChange}/>
            <button>Add</button>
            </fieldset>
        </form>
      );
    }
}
export default TeamForm;