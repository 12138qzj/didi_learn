import React, { Component } from 'react';
import { Layout } from 'antd';
import PMenu from './components/PMenu';

import styles from './index.less';


const { Header, Content } = Layout;

class BasicLayout extends Component {
  
  render() {
    return (
      <Layout>
        <PMenu/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0,textAlign:'center'}}>
              头部导航栏
          </Header>
          <Content style={{background: '#fff', margin: 10,}}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout >
    );
  }
}

export default BasicLayout;
