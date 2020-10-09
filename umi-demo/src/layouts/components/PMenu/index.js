import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import router from 'umi/router';
import styles from "./index.less";

const { Sider } = Layout;

export default class PMenu extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    goContentByUrl = (url)=>()=>{
        router.push(url)
    }
    render() {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                className={styles.siderWrapper}
                // 折叠前的宽度
                width='180px'
                // 折叠后的宽度
                collapsedWidth="80px"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span onClick={this.goContentByUrl('/menu')}>菜单栏组件学习</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span onClick={this.goContentByUrl('/SiderMenu')}>菜单栏折叠</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
                <div
                        className={ !this.state.collapsed ? styles.footer:styles.footer1}
                    >
                        {
                            !this.state.collapsed ?
                                (<div>
                                    <Icon type="plus-circle" />
                                    <span> 申请团队</span>
                                </div>
                                )
                                : null
                        }

                        <div>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                    </div>
            </Sider>
        )
    }
}
