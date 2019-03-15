import React, { Component } from 'react';
import Map from '../Map/Map'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="homepage">
            <div className='sectionOne'>
                <h1 className='intro'>Get to Know Who Represents You</h1>
                <div>
                    <Map className="map"/>
                </div>
            </div>

            </div>
        );
    }
}

export default Home;