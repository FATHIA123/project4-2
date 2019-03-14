import React, { Component } from 'react';
import './Senate.css'
import { Link } from "react-router-dom"


class Senate extends Component {
    render() {
        let list = this.props.senateData.map(item => {
            return (
              
              <div className="currency" key={item.currency}>
                <p><Link to={"/IndividualSenate/"+ item.name}><img src={item.url} alt=""/></Link>: {item.name}</p>
              </div>
             
            )
          })
          return (
            <div>
              {list}
            </div>
          )
    }
}

export default Senate;