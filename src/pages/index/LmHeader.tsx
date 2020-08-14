import React from 'react';
import { Link } from 'umi';
import { Layout, Button } from 'antd';
import styles from './LmHeader.less';
const { Header } = Layout;

const LmHeader: React.FC = props => {
    return (
        <Header className="styles.index-header">
            <Link to="/user/login">
                <Button style={{ float: "right", margin: 14 }}>登录</Button>
            </Link>

            <Link to="/">
                <Button style={{ float: "right", margin: 14 }}>注册</Button>
            </Link>
        </Header>
    );
};

export default LmHeader;