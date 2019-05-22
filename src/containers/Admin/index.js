import React , { Component } from 'react' ;
import AdminMenu from '../../components/AdminMenu';
import AdminManagerUser from '../AdminManagerUser' ;
import AdminManagerTags from '../AdminManagerTags' ;
import AdminManagerArticle from '../AdminManagerArticle' ;
import AdminNewArticle from '../AdminNewArticle';

import './index.scss' ;
class Admin extends Component {
    render(){
        return(
            <div className="Admin-block">
                <div className="Admin-left">
                    <AdminMenu/>
                </div>
                <div className="Admin-right">
                    {/* <AdminManagerUser/> */}
                    {/* <AdminManagerTags/> */}
                    {/* <AdminManagerArticle/> */}
                    <AdminNewArticle/>
                </div>
            </div>
        )
    }
}

export default  Admin ;