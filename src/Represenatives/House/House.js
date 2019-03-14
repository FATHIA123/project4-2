import React, { Component } from 'react';
import './House.css'
import { Link } from "react-router-dom"


class House extends Component {
    render() {
        let list = this.props.houseData.map(item => {
            return (
              
              <div className="currency" key={item.currency}>
                <p><Link to={"/IndividualRep/"+ item.name}><img src={item.url} alt=""/></Link>: {item.name}</p>
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

export default House;