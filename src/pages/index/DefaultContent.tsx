import React from 'react';
import { Link } from 'umi';
import { Layout } from 'antd';
const { Content } = Layout;

const DefaultContent: React.FC = props => {
    return (
        <Content className="styles.index-header">
            I am Iron Man!
        </Content>
    );
};

export default DefaultContent;
