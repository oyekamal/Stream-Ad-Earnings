import { Grid } from "@mui/material";
import "./App.css";
// import MyForm from "./Components/MyForm";
// import MyTable from "./Components/MyTable";
import SignIn from "./Containers/Auth/Login";
import { Output } from "@mui/icons-material";
import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./Containers/UserManagement";
import AdvertisementPage from "./Containers/AdvertisementPage";
import SignUp from "./Containers/Auth/Register";

function App() {
  return (
    <>
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

export default App;
