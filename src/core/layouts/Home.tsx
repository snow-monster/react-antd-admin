import React, { useState } from "react";
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined, TeamOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import './home.css'
const { Header, Sider, Content } = Layout;

const Home: React.FC = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [menuItems, setMenuItems] = useState([
        {
            key: "1",
            icon: <UserOutlined />,
            label: "示例页面1",
        },
        {
            key: "2",
            icon: <UserOutlined />,
            label: "示例页面2",
        },
        {
            key: "3",
            icon: <UsergroupAddOutlined />,
            label: "权限管理",
            children: [
                {
                    key: "/home/authority/user",
                    icon: <UserOutlined />,
                    label: "用户管理",
                },
                {
                    key: "/home/authority/role",
                    icon: <UsergroupAddOutlined />,
                    label: "角色管理",
                },
               
            ]
        }
    ])

    const navigate = useNavigate()
    const onSelect = ({ key }) => {
        navigate(key)
    }
    const location = useLocation()
    console.log('location', location)
    return (
        <Layout id="components-layout-demo-custom-trigger">
            <Sider trigger={null} collapsible collapsed={collapsed} style={{height: '100vh'}}>
                <div className="logo" > Snow Monster</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    onSelect={onSelect}
                    items={menuItems}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: "trigger",
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                   <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
