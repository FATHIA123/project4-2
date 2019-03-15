import React, { Component } from 'react';
import { Link } from "react-router-dom"
 

class IndividualSenate extends Component {

   
    render() {
        let senateRep = this.props.listOfSenate.filter(onerep => 
            onerep.name === this.props.match.params.name)[0]
            

        console.log(this.props.listOfSenate)
// array of objects

        return (
            <div>


<h1>More Information on {this.props.match.params.name}</h1>

              <Link to={"/issues/"+ senateRep.member_id}> <img src={senateRep.url} alt=""/></Link> 
                {/* <div>{senateRep[0].url}</div> */}
               <div>{senateRep.name}</div>
              
          </div>
        );
    }
}

export default IndividualSenate;