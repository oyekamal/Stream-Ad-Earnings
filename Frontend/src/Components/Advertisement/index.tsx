import React, { useEffect, useState } from "react";
import { Button, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import { AdContainer, ImageContainer } from "./styles";

const Advertisement = ({ qrLink, imgLink }): any => {
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
            src={qrLink}
            alt="Content"
          />
        </Content>
        <ImageContainer>
          <img
            style={{ width: "100%", height: "99%" }}
            src={imgLink}
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

export default Advertisement;
