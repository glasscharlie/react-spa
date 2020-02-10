import React from 'react';


function Teams(props){
  return(
    <>
   
 
     <li key={props.team.id}> 
     <p>{props.team.name}</p>
     <button onClick={() => props.onDelete(props.team)}>Delete</button>
     </li>
    </>
  ) 
}
export default Teams;