import React from "react";
import { Content } from "antd/es/layout/layout";
import { AdContainer, ImageContainer } from "./styles";
import { QRCode } from "antd";

const Advertisement = ({ qrLink, imgLink, progress }) => {
  return (
    <Content>
      <AdContainer>
        <Content>
          <QRCode
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              bottom: 20,
              right: 10,
              zIndex: 100,
              background: "white"
            }}
            value={qrLink}
          />
        </Content>
        <ImageContainer>
          <img
            style={{ width: "100%", height: "99%" }}
            src={`http://localhost:8000/${imgLink}`}
            alt="Advertisement Image"
          />
        </ImageContainer>
        <Content
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            width: `${progress}%`,
            height: "10px",
            backgroundColor: "red",
            transition: "width 0.3s linear", // Reduced transition time for smoother effect
            display: progress > 0 ? "block" : "none", // Ensuring display property is not 'none' when progress is updated
          }}
        />
      </AdContainer>
    </Content>
  );
};

export default Advertisement;
