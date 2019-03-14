import React, { Component } from 'react';
import './App.css';
import { Route , Link, Switch } from "react-router-dom"
import Representatives from './Represenatives/Representatives'
import House from './Represenatives/House/House';
import Senate from './Represenatives/Senate/Senate'
import listOfHouse from './Data/va-representatives.json'
import listOfSenate from './Data/va-senators.json'




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      listOfHouse: listOfHouse,
      listOfSenate: listOfSenate
    }
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/" >
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
          </Link>
          <Link to="/representatives">
          <h1>Virginia Representatives</h1>
          </Link>
        </nav>
        <main>
          
          <Switch>
          {/* <Route path="/price/:currency" render={(routerProps) => <Price setPrice={this.setPrice}  {...routerProps} {...this.state}/>} /> */}
          {/* <Route path="/IndividualRep/:name" render={routerProps => <IndividualRep {...listOfHouse} {...listOfSenate} {...routerProps} {...this.state}/>}/> */}
          <Route path="/representatives"  render={() => <Representatives /> }/>
          <Route path="/senate"  render={() => <Senate senateData={listOfSenate}/> }/>
          <Route path="/house"  render={() => <House houseData={listOfHouse}/> }/>

          {/* <Route path="/" exact component={Home}/> */}
          {/* <Home /> */}
          </Switch>

          
        </main>
      </div>
    );
  }
}

export default App;
