import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}
