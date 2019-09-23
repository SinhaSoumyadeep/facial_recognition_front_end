import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./Containers/Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import bg from '../src/Images/background.jpg'
ReactDOM.render(
    <div className="container-fluid">
        <Dashboard/>
    </div>
    ,
    document.getElementById('root')
);
