import React, { Component } from 'react';

class IndividualSenate extends Component {
    render() {
        let senateRep = this.props.listOfSenate

        console.log(this.props.listOfSenate)
// array of objects

        return (
            <div>


<h1>More Information on {this.props.match.params.name}</h1>

                <img src={senateRep[0].url} alt=""/>
                {/* <div>{senateRep[0].url}</div> */}
               <div>{senateRep[0].name}</div>
              
          </div>
        );
    }
}

export default IndividualSenate;