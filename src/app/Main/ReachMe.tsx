"use client"
import React from 'react'
import type { FormProps } from 'antd'
import { Form } from 'antd'
import ReachMeForm from './ReachMeForm'

type FieldType = {
  name?: string
  email?: string
  phone?: string
  text?: string // <-- Add this line
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
      <ReachMeForm form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  )
}

export default ReachMe
