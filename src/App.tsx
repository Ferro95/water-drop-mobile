import React from 'react';
import { Form, Input, Button } from 'antd-mobile';

function App() {
  return (
    <Form
      footer={
        <Button block type="submit" color="primary" size="large">
          提交
        </Button>
      }
    >
      <Form.Item name="name" label="姓名">
        <Input />
      </Form.Item>
      <Form.Item name="desc" label="描述">
        <Input />
      </Form.Item>
    </Form>
  );
}

export default App;
