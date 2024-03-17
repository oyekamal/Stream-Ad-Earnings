import React from 'react';
import { Button } from 'antd';

const AdminPage = () => {
  const handleClick = () => {
    console.log('Button clicked');
    // Add your logic here
  };

  return (
    <div>
      <h1>Admin Component</h1>
      <Button type="primary" onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default AdminPage;