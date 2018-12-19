import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home';
import Carousel from './views/carousel';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/carousel' exact component={Carousel}/>
        </Switch>
    )
};

export default Routes;