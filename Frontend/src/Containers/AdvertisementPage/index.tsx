import React, { useState, useEffect } from "react";
import { Content } from "antd/es/layout/layout";
import Advertisement from "../../Components/Advertisement";
import lowerThirdImage from "./images/lowerthird02.png";
import { useDispatch, useSelector } from "react-redux";
import { GetAdsGroups } from "../../redux/Slice/AdSlice";

const AdvertisementPage = () => {
  const dispatch = useDispatch();
  const myState = useSelector(state => state.user.loginDetails.currentUserData);
  const dataset = [
    {
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1710346933",
      qrCodeUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
    },
    {
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg?t=1710346933",
      qrCodeUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
    },
    {
      imageUrl: lowerThirdImage,
      qrCodeUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
    },
  ];

  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntryIndex((prevIndex) =>
        prevIndex === dataset.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0); // Reset progress when transitioning to a new advertisement
    }, 3000);

    return () => clearInterval(interval);
  }, [dataset]);

  useEffect(() => {

    let intervalId: any;
    if (progress < 100) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 50);
    } else {
      clearInterval(intervalId); // Clear interval when progress reaches 100
    }

    return () => clearInterval(intervalId);
  }, [currentEntryIndex, progress]);

  useEffect(() => {
    if (myState.key) {
      dispatch(GetAdsGroups({ token: myState.key }));
    }
    // dispatch(GetAdsGroups());
  }, [myState]);

  return (
    <Content>
      <Advertisement
        qrLink={dataset[currentEntryIndex].qrCodeUrl}
        imgLink={dataset[currentEntryIndex].imageUrl}
        progress={progress}
      />
    </Content>
  );
};

export default AdvertisementPage;
