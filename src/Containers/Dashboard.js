import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "../Component/Home";




export default class Dashboard
    extends Component {

    render() {
        return (
            <Router>
                <div>

                    <Route path="/home"
                           component={Home}>
                    </Route>

                </div>
            </Router>
        )
    }
}