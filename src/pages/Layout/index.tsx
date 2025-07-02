import { Layout, Menu, Popconfirm, type MenuProps } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { clearUserInfo, fetchUserInfo } from '@store/modules/userStore'

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  // 获取当前路径
  const location = useLocation()
  const selectedKeys = location.pathname

  const [current, setCurrent] = useState(selectedKeys)

  // 获取个人信息
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(state => state.user.userInfo)
  
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])

  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  const loginOut = () => {
    dispatch(clearUserInfo())
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={loginOut}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            onClick={onClick}
            theme="dark"
            selectedKeys={[current]}
            items={items}
            style={{ height: '100%', borderRight: 0 }}>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout