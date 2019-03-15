import React, { Component } from 'react';
import './House.css'
import { Link } from "react-router-dom"


class House extends Component {
    render() {
        let list = this.props.houseData.map(item => {
            return (
              
            <div className="house" key={item.currency}>
                        <div><Link to={"/IndividualHouse/"+ item.name}><img src={item.url} alt="" width="225" height="275"/></Link></div>
                        <div>{item.name}</div>
                        <div>{item.party}</div>
                        <div>{item.since}</div>
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

export default House;