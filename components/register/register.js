import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/router";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddBlog = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [submitting, setsubmitting] = useState(false);

  const handleAddPost = async (values) => {
    try {
      setsubmitting(true);
      const response = await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      setsubmitting(false);
      message.success("Added new blog successfully");
      router.push("/");
      return data;
    } catch (error) {
      message.error("Something Went Wrong, Try Again");
      router.push("/register");
    }
  };

  const onFinish = (values) => {
    handleAddPost(values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="addblog"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="title"
        label="Blog Title"
        rules={[{ required: true, message: "You have to add blog Title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Blog description"
        rules={[
          { required: true, message: "You have to add blog description" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="author"
        label="Blog Author"
        rules={[{ required: true, message: "You have to add author name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {submitting ? "Adding New Blog.." : "Add A Blog"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBlog;
