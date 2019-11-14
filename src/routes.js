import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Form from './pages/Form';
import Categoria from './pages/Categoria';
import Subcategoria from './pages/Subcategoria';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/form" component={Form} />
                <Route path="/categoria" component={Categoria} />
                <Route path="/subcategoria" component={Subcategoria} />
            </Switch>
        </BrowserRouter>
    );
}