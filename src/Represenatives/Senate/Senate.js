import React, { Component } from 'react';
import './Senate.css'
import { Link } from "react-router-dom"


class Senate extends Component {
    render() {
        let list = this.props.senateData.map(item => {
            return (
              
               <div className="senate" key={item.senate}>
                        <div className="uRL"><Link to={"/IndividualSenate/"+ item.name}><img src={item.url} alt=""/></Link></div> 
                        <div className="dis">{item.name}</div>
                        <div className="dis">{item.party}</div>
                        <div className="dis">{item.since}</div>


                        
              </div>
             
            )
          })
          return (
            <div className="one">
              {list}
            </div>
          )
    }
}

export default Senate;