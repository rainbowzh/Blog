import React ,{ Component } from 'react' ;
import { Menu, Icon } from 'antd' ;
import './index.scss' ;


const menus = [
    { url: '/', name: '首页', iconType: 'home' },
    { url: '/managerUser', name: '用户管理', iconType: 'usergroup-delete' },
    { url: '/newArticle', name: '发文', iconType: 'file-text' },
    { url: '/managerTags', name: '标签管理', iconType: 'tags-o' },
    { url: '/managerArticle', name: '文章管理', iconType: 'edit' },
    { url: '/managerComment', name: '评论管理', iconType: 'message' },
]

class AdminMenu extends Component{
    render() {
        return(
            <div className="AdminMenu-block">
                <Menu
                    mode = "inline"    
                    theme = "dark"
                    selectedKeys = {[this.props.url]}
                    onClick = {({key}) => {this.props.changeUrl(key) ;this.props.history.push(`/admin${key}`)}}
                >
                    {
                        menus.map( (item ,index) => {
                            return(
                                <Menu.Item key= { item.url } >
                                    <Icon type={item.iconType}></Icon>
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default AdminMenu ;