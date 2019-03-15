import React, { Component } from 'react';
import Iframe from 'react-iframe'

class IndividualHouse extends Component {
    render() {
        let houseRep = this.props.listOfHouse.filter(onerep => 
            onerep.name === this.props.match.params.name)[0]
            

        console.log(houseRep)
// array of objects

        return (
            <div>


<h1>More Information on {this.props.match.params.name}</h1>
            <div className="profile">
                <div>
                    <img src={houseRep.url} alt="representatives" width="225" height="275"/>
                    <div>
                        <span>{houseRep.initial}</span> |
                        <span> {houseRep.name}</span>
                    </div>
                <div>District: {houseRep.district}</div>
            </div>
                <Iframe className="map" url={houseRep.mapUrl}   
                    position="relative"
                    width="400"
                    height="600"
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0"
                    // min-zoom="15"
                    />
                    
            </div>
            
                {/* <div>{houseRep[0].url}</div> */}
                
                {/* <div> */}
                    {/* {houseRep.contentUrl} */}
                {/* </div> */}
               
              
                  </div>
        );
    }
}

export default IndividualHouse;