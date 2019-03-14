import React, { Component } from 'react';
import { Route , Link, Switch } from "react-router-dom"


class Representatives extends Component {
    render() {
        return (
            <div>
                <Link to="/senate"><div>Senate</div></Link>
                <Link to="/house"><div>House</div></Link>
            </div>
        );
    }
}

export default Representatives;