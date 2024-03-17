import React from 'react';
import { Content } from 'antd/es/layout/layout';
import Advertisement from '../../Components/Advertisement';

const AdvertisementPage = () => {
  const dataset = [
    {
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1710346933",
      qrCodeUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
    },
  ];


  return (
    <Content>
        <Advertisement qrLink={dataset[0].qrCodeUrl} imgLink={dataset[0].imageUrl} /> 
    </Content>
  );
};

export default AdvertisementPage;