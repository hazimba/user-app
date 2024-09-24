"use client"
import React from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input, notification } from 'antd'
import { NotificationPlacement } from 'antd/es/notification/interface'

type FieldType = {
  name?: string
  email?: string
  phone?: string
  text?: string // <-- Add this line
}

interface ReachMeFormProps {
  form: any;
  onFinish: (values: any) => void;
  onFinishFailed: (errorInfo: any) => void;
}

const ReachMeForm: React.FC<ReachMeFormProps> = ({ form, onFinish, onFinishFailed }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      <Form
        form={form}
        name="contact"
        labelCol={{ span: 6 }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className='flex flex-col w-screen justify-center gap-4'>
          <div className='flex'>
            <div>
              <Form.Item
                label="Name"
                name="name"
                style={{ width: 350 }}
                rules={[{ required: false, message: 'Please enter your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: false, type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: false, message: 'Please enter your phone number!' }]}
              >
                <Input />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                label="Text"
                name="text"
                style={{ width: 350 }}
                rules={[{ required: false, message: 'Please enter your phone number!' }]}
              >
                <Input.TextArea showCount style={{ height: '150px' }} maxLength={100} />
              </Form.Item>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button type="primary" htmlType="submit" onClick={() => openNotification('top')}>
              Submit
            </Button>
          </div>
        </div>


      </Form>

    </>
  )
}

export default ReachMeForm
