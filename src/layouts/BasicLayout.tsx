import React from 'react';
import { Layout } from 'antd';
import LmHeader from '@/pages/index/LmHeader'
import LmSider from '@/pages/index/LmSider';
import 'antd/dist/antd.css';
const { Footer } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <LmHeader />
      <Layout>
        <LmSider />
        {props.children}
      </Layout>
      <Footer style={{ textAlign: "center" }}> 张向阳所有 </Footer>
    </Layout>

  );
};
export default BasicLayout;
