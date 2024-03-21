import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const { Header } = Layout;

// Define your menu items with paths and labels
const items1 = [
  {
    key: '1',
    label: 'Home',
    path: '/',
  },
  {
    key: '4',
    label: 'Ads',
    path: '/Ads',
  },
  {
    key: '5',
    label: 'Profile',
    path: '/Profile',
  },
].map((item) => ({
  ...item,
  label: <Link to={item.path}>{item.label}</Link>, // Wrap label with Link
}));

const NavBar: React.FC = () => {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;
