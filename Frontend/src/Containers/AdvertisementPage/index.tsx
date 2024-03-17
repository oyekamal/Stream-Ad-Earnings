import React from "react";
import { Content } from "antd/es/layout/layout";
import Advertisement from "../../Components/Advertisement";

const AdvertisementPage = () => {
  const dataset = [
    {
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1710346933",
      qrCodeUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
    },
    {
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg?t=1710346933",
      qrCodeUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
    },
    {
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg?t=1710346933",
      qrCodeUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
    },
  ];

  return (
    <Content>
      <Advertisement
        qrLink={dataset[0].qrCodeUrl}
        imgLink={dataset[0].imageUrl}
      />
    </Content>
  );
};

export default AdvertisementPage;
