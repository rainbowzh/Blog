import React , { Component } from 'react' ;
import { Table } from 'antd' ;


const dataSource = [{
    key: '1',
    username: 'sam',
    _id: '59ed8b13a1bbb459a27259e5',
    password: 'e823e452fce2153808e13ec6b7a95fcf',
    type: 'admin'
},{
    key: '2',
    username: 'sam2',
    _id: '59ed8b13a1bbb459a27259e3',
    password: 'e823e452fce2153808e13ec6b7a95fcf',
    type: 'user'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'username',
    key: 'name'
}, {
    title: 'ID',
    dataIndex: '_id',
    key: 'ID',
}, {
    title: '密码(加密后)',
    dataIndex: 'password',
    key: 'password',
}
, {
    title: '身份',
    dataIndex: 'type',
    key: 'address',
}];


class AdminManagerUser extends Component {
    render() {
        return(
            <div className = "AdminManagerUser-block" >
                <h2>用户管理</h2>
                <div className="AdminManagerUser-content">
                    <Table
                        className="table"
                        pagination={false}
                        columns={columns}
                        dataSource={dataSource}
                    />
                </div>
            </div>
        )
    }
}

export default AdminManagerUser;
