import React, { Component } from 'react';
// import Data from './../../Data/va-senators.json'
// import axios from 'axios';
import listOfSenate from '../../Data/va-senators.json'

// 

// const memberURL = `https://api.propublica.org/congress/v1/members/${member_id}/votes.json`
console.log(listOfSenate)
// let member_id =  this.props.senateData.map(item => {
    //     return (
        
        //     )
        //   })
        class issues extends Component {
            
            constructor(props){
            super(props);
            this.state={
            listOfSenate: listOfSenate,
            member_id: {}
                }
                this.setSenate = this.setSenate.bind(this)
            
            }
            
            
            // componentDidMount(){
                //     // const currency = this.props.match.params.currency;
                //     //   const url = `${memberURL}${currency}.json`
                
                //       axios.get(memberURL) 
                //       .then(response => {
                    //           console.log(response.data.bpi[currency].rate)
                    //         let newSenate = response.data.bpi[currency].rate;
                    //         this.props.setSenate(newPrice)
                    //       })
                    //       .catch(err => {
                        //         console.error(err)
                        //       })
                        
            //   }
                        
setSenate(senate) {
    this.setState({senate: senate})
}
            render() {
                            console.log(this.state.Data)
                            return (
                                <div>
                hello world
            </div>
        );
    }
}

export default issues;