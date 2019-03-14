import React, { Component } from 'react';

class IndividualHouse extends Component {
    render() {
        let houseRep = this.props.listOfHouse.filter(onerep => 
            onerep.name === this.props.match.params.name)[0]
            

        console.log(houseRep)
// array of objects

// let showStock = this.props.stocks.filter(oneStock => 
//     oneStock.symbol === this.props.match.params.stock)[0]
//     console.log(showStock)

        return (
            <div>


<h1>More Information on {this.props.match.params.name}</h1>

                <img src={houseRep.url} alt=""/>
                {/* <div>{houseRep[0].url}</div> */}
               <div>{houseRep.name}</div>
               {/* <div>{houseRep[0].change}</div>
               <div>{houseRep[0].lastPrice}</div>
               <div>{houseRep[0].high}</div>
               <div>{houseRep[0].low}</div>
               <div>{houseRep[0].open}</div>          */}
                  </div>
        );
    }
}

export default IndividualHouse;