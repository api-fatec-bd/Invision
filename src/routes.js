import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

export default function Routes() {
    return (
        <BrowserRouter basename='https://api-fatec-bd.github.io/Invision/'>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}
