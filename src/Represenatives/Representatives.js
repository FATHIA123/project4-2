import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Representatives.css'

class Representatives extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/senate"><button className="btn">Senate</button></Link>
                <Link to="/house"><button className="btn">House</button></Link>
            </div>
        );
    }
}

export default Representatives;