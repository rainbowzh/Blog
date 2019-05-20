import { Router , Route , Switch} from 'react-router-dom' ;
import  React ,{ Component } from 'react' ; 

import Home from './containers/Home';
import Detail from './containers/Detail';

class Front extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { url} = this.props.match ;
        console.log(url);
        return( 
            <Switch>
                <Route path={url} exact component={Home}/>
                <Route path={`/detail/:id`} component={Detail}/>
            </Switch>
        )
    }
}

export default Front ;