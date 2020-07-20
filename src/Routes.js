import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/chat"></Route>
            </Switch>
        </Router>
    );
}

export default Routes;