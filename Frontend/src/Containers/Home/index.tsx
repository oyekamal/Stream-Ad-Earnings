import SignIn from "../Auth/Login";
import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../UserManagement";
import AdvertisementPage from "../AdPage/Components/AdvertisementPage";
import SignUp from "../Auth/Register";
import NavBar from "../../Components/Navbar";
import FooterBar from "../../Components/FooterBar";
import AdGroupComponent from "../AdPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { LoginUserSuccess } from "../../redux/Slice/authSlice";

export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    if (userDataCookie) {
      const userData = JSON.parse(userDataCookie);
      dispatch(LoginUserSuccess(userData));
    }
  }, [dispatch]);

  return (
    <>
      {location?.pathname === "/Ads" && <NavBar />}
      <Content
        style={{
          overflowX: "hidden",
          overflowY: "scroll",
          background: "whitesmoke",
          height: "100vh",
        }}
      >
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="usermanagement" element={<AdminPage />} />
          <Route path="Ads" element={<AdGroupComponent />} />
          <Route path="ad-page" element={<AdvertisementPage />} />
        </Routes>
      </Content>
      {location?.pathname === "/Ads" && <FooterBar />}
    </>
  );
};

export default Home;
