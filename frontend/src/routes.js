import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './components/Main';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}