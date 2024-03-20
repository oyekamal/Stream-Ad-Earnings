import { SettingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, Select } from 'antd';
import { GetAdsGroups } from '../../redux/Slice/AdGroupSlice';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

type ExpandIconPosition = 'start' | 'end';

const AdGroupComponent: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.loginDetails.currentUserData);
  const ads_data = useSelector(state => state.AdsGroups.AdsGroupsDetails.AdsGroupsData);
  useEffect(() => {
    if (profile.key) {
      dispatch(GetAdsGroups({ token: profile.key }));
    }
    // dispatch(GetAdsGroups());
  }, [profile]);
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  console.log(ads_data);
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      <br />
      {/* <span>Expand Icon Position: </span>
      <Select value={expandIconPosition} style={{ margin: '0 8px' }} onChange={onPositionChange}>
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select> */}
    </>
  );
};

export default AdGroupComponent;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
