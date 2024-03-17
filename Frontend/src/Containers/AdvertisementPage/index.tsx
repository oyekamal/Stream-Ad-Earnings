import React, { useEffect, useState } from "react";
import { Button, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import { AdContainer, ImageContainer } from "./styles";

const AdvertisementPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Content>
      <AdContainer>
        <Content>
          <img
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              bottom: 10,
              right: 0,
              zIndex: 100,
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="Content"
          />
        </Content>
        <ImageContainer>
          <img
            style={{ width: "100%", height: "99%" }}
            src="https://cdn.akamai.steamstatic.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1710346933"
            alt="Content"
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
            transition: "width 3s ease-in-out",
          }}
        />
      </AdContainer>
    </Content>
  );
};

export default AdvertisementPage;
