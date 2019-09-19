import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Navigation from './component/navigation/navigation'
import AppBar from './component/app-bar/app-bar'
import Camera from './component/camera/camera'

class App extends Component {
    render() {
        return (
            <Switch>

                <Route exact path="/camera" render={() => (
                    <div>
                        <AppBar/>
                        <Camera/>
                        <Navigation/>
                    </div>
                )}/>
                <Route exact path="/" render={() => (
                    <div>
                        <AppBar/>
                        <Navigation/>
                    </div>
                )}/>
            </Switch>
        )
    }
}


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
