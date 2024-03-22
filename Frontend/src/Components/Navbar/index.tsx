import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Dropdown, Button, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../redux/Slice/authSlice";
import { Content } from "antd/es/layout/layout";
const { Header } = Layout;
const { Text } = Typography;

const items1 = [
  {
    key: "1",
    label: "Home",
    path: "/",
  },
  {
    key: "4",
    label: "Ads",
    path: "/Ads",
  },
  {
    key: "5",
    label: "Profile",
    path: "/Profile",
  },
].map((item) => ({
  ...item,
  label: <Link to={item.path}>{item.label}</Link>,
}));

const NavBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username } = useSelector(
    (state) => state.user.loginDetails.currentUserData
  );
  const handleLogout = () => {
    Cookies.remove("userData");
    dispatch(Logout());
    navigate("/");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentPath]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
          <Text style={{marginRight: "10px", color:"white"}}>{username}</Text>
          <Dropdown overlay={profileMenu} trigger={["click"]}>
            <Button icon={<UserOutlined />} shape="circle"></Button>
          </Dropdown>
      </Header>
    </Layout>
  );
};

export default NavBar;
