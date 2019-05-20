import React  from 'react';
import ReactDom from 'react-dom';
import './index.scss';


import {BrowserRouter as Router ,Route,Switch ,history} from 'react-router-dom';
// import NotFound from './containers/Notfound';
// import Admin from './containers/Admin';
// import Front from './containers/Front';
import Home from './containers/Home';
import Detail from './containers/Detail';

ReactDom.render(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/detail" component={Detail}/>
                {/* <Route path='/404' component={NotFound}/>
                <Route path='/admin' component={Admin}/>              
                <Route component={Front} /> */}
            </Switch>
        </div>
    </Router>
    ,document.getElementById('root'));