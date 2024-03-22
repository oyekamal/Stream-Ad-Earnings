import React, { useState, useEffect } from "react";
import { Content } from "antd/es/layout/layout";
import Advertisement from "../../../../Components/Advertisement";
import lowerThirdImage from "./images/lowerthird02.png";
import image2 from "./images/fullscreen01.png";
import image3 from "./images/fullscreen02.png";
import { useDispatch, useSelector } from "react-redux";
import { GetAdsGroups } from "../../../../redux/Slice/AdGroupSlice";

const AdvertisementPage = () => {
  const dispatch = useDispatch();
  const myState = useSelector(
    (state) => state.user.loginDetails.currentUserData
  );
  // const dataset = [
  //   {
  //     imageUrl: image3,
  //     qrCodeUrl:
  //       "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
  //   },
  //   {
  //     imageUrl: image2,
  //     qrCodeUrl:
  //       "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
  //   },
  //   {
  //     imageUrl: lowerThirdImage,
  //     qrCodeUrl:
  //       "https://miro.medium.com/v2/resize:fit:1400/1*sHmqYIYMV_C3TUhucHrT4w.png",
  //   },
  // ];

  const current_ads = useSelector(
    (state) => state.Ads.CurretAds.currentAdArray
  );


  console.log(current_ads)

  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntryIndex((prevIndex) =>
        prevIndex === current_ads.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0); // Reset progress when transitioning to a new advertisement
    }, 3000);

    return () => clearInterval(interval);
  }, [current_ads]);

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
  }, [myState]);

  return (
    <Content>
      {current_ads && (
        <Advertisement
          qrLink={current_ads[currentEntryIndex]?.url}
          imgLink={current_ads[currentEntryIndex]?.image}
          progress={progress}
        />
      )}
    </Content>
  );
};

export default AdvertisementPage;
