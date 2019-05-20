import React  from 'react';
import ReactDom from 'react-dom';
import './index.scss';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import NotFound from './Notfound';
// import Admin from './Admin';


// import Home from './containers/Home';
// import Detail from './containers/Detail';

import Backs from './Backs';
import Front from './Front';
ReactDom.render(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Front}/>
                <Route path='/Backs' exact component={Backs}/>   
            </Switch>
        </div>
    </Router>
    ,document.getElementById('root'));