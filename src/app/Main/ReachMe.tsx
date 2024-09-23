"use client"
import React from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

type FieldType = {
  name?: string
  email?: string
  phone?: string
}

const ReachMe = () => {

  const [form] = Form.useForm<FieldType>()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    form.resetFields()
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="py-12 flex justify-between items-center flex-col bg-[#181818] gap-y-4">
      <div className='flex justify-center items-center flex-col'>
        <div className="font-semibold text-center text-2xl md:text-3xl pb-2 text-white">Reach Me!</div>
      </div>
      <Form
        name="contact"
        labelCol={{ span: 6 }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className='flex w-screen justify-center gap-4'>
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
            </Form.Item></div>

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
      </Form>
      <div className='flex justify-center'>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ReachMe
