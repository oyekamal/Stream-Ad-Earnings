
import SignIn from "../Auth/Login";
import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../UserManagement";
import AdvertisementPage from "../AdvertisementPage";
import SignUp from "../Auth/Register";
import NavBar from "../../Components/Navbar";

function Home() {
    return (
        <>
        <NavBar></NavBar>
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
                    <Route path="ad-page" element={<AdvertisementPage />} />
                </Routes>
            </Content>
        </>
    );
}

export default Home;
