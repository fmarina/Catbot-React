import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/chat"><Chat/></Route>
            </Switch>
        </Router>
    );
}

export default Routes;