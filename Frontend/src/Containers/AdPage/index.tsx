import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  List,
  Row,
  Select,
  Space,
  Typography,
  Collapse,
  Tooltip,
} from "antd";
import { GetAdsGroups } from "../../redux/Slice/AdGroupSlice";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "antd/es/layout/layout";
import { StyledCollapse } from "./styles";
import Paragraph from "antd/es/typography/Paragraph";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;
const { Panel } = Collapse;
const { Text } = Typography;


type ExpandIconPosition = "start" | "end";

const AdGroupComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(
    (state) => state.user.loginDetails.currentUserData
  );
  const ads_data = useSelector(
    (state) => state.AdsGroups.AdsGroupsDetails.AdsGroupsData
  );

  useEffect(() => {
    if (profile.key) {
      dispatch(GetAdsGroups({ token: profile.key }));
    }
  }, [profile]);

  return (
    <Content style={{ padding: "20px" }}>
      <StyledCollapse accordion>
        {ads_data &&
          ads_data?.results?.map((item: any, index) => (
            <Panel
              header={
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Space>
                    <Text>Ad Group: </Text>
                    <Text strong>{item.name}</Text>
                    <Text> </Text>
                    <Text>Pause Duration: </Text>
                    <Text strong>{item.pause_duration}</Text>
                  </Space>
                  <Link to={"/ad-page"} type="primary">View Ad Group</Link>
                </div>
              }
              key={item.id}
            >
              <Text strong style={{ marginLeft: "10px" }}>
                Advertisements
              </Text>
              <List
                itemLayout="horizontal"
                dataSource={item.advertisement}
                style={{ marginTop: "20px" }}
                renderItem={(ad: any, index) => (
                  <>
                    <List.Item
                      style={{
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        padding: "10px",
                        display: "flex",
                        marginLeft: "10px",
                      }}
                    >
                      <Row justify={"space-between"} style={{ width: "100%" }}>
                        <Col span={12}>
                          <Text strong>Image: </Text>
                          <Text>{ad.image}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>URL: </Text>
                          <Text>{ad.url}</Text>
                        </Col>
                        <Col span={4}>
                          <Text strong>Duration: </Text>
                          <Text>{ad.duration}</Text>
                        </Col>
                      </Row>
                    </List.Item>
                  </>
                )}
              />
            </Panel>
          ))}
      </StyledCollapse>
    </Content>
  );
};

export default AdGroupComponent;
