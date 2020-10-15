import React from 'react';
import { Form, Button, Select } from 'antd';
import { func } from 'prop-types';
import './styles.css';

const AddUrlsForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };
  const submitAndReset = (values) => {
    onSubmit(values);
    form.resetFields();
  };
  return (
    <Form
      className="form"
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={submitAndReset}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Urls" name="urls" rules={[{ required: true, message: 'This field is required!' }]}>
        <Select
          className="select"
          mode="tags"
          tokenSeparators={['enter']}
          placeholder="Use enter for add additional url"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

AddUrlsForm.propTypes = {
  onSubmit: func.isRequired,
};

export default AddUrlsForm;
