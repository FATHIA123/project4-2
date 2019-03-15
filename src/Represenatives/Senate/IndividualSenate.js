import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class IndividualSenate extends Component {
    render() {
        let senateRep = this.props.listOfSenate.filter(onerep => 
            onerep.name === this.props.match.params.name)[0]
            

        console.log(this.props.listOfSenate)
// array of objects

        return (
            <div className='app'>


<h1 className="rep-subtitle">More Information on {this.props.match.params.name}</h1>
    <div className="profile">
            <div>
                <img src={senateRep.url} alt="representatives" width="225" 
                height="275"/>
                
                <div>
                    <span>{senateRep.initial}</span> |
                    <span> {senateRep.name}</span>
                    <div className='twitter'>
                    <TwitterTimelineEmbed
                    sourceType= 'profile'
                    screenName= {senateRep.twitterName}
                    options={{height: 300}}/>
                    </div>
                </div>
            </div>
         
          </div>
              
          </div>
        );
    }
}

export default IndividualSenate;