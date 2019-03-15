import React, { Component } from 'react';

class IndividualHouse extends Component {
    render() {
        let houseRep = this.props.listOfHouse.filter(onerep => 
            onerep.name === this.props.match.params.name)[0]
            

        // console.log(houseRep)
// array of objects

        return (
            <div>


<h1>More Information on {this.props.match.params.name}</h1>

                <img src={houseRep.url} alt=""/>
                {/* <div>{houseRep[0].url}</div> */}
               <div>{houseRep.name}</div>
              
                  </div>
        );
    }
}

export default IndividualHouse;