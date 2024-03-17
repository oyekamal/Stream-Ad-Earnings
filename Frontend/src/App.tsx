import { Grid } from "@mui/material";
import "./App.css";
// import MyForm from "./Components/MyForm";
// import MyTable from "./Components/MyTable";
import SignIn from "./Containers/Login";
import { Output } from "@mui/icons-material";
import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./Containers/UserManagement";
import AdvertisementPage from "./Containers/AdvertisementPage";

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
          <Route path="usermanagement" element={<AdminPage />} />
          <Route path="ad-page" element={<AdvertisementPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
