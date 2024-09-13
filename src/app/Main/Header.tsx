import { UserOutlined } from "@ant-design/icons"
import Image from "next/image"
import { Button, Divider, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';


const Header = () => {

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hazimba">
          GitHub Profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hazimba/">
          LinkendIn
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hazimba/">
          Instagram
        </a>
      ),
    }
  ]

  return (
    <>
      <div className="flex w-screen items-center px-8">
        <div className="">
          <Image src="/logo2.png" alt="Hazim Bakar" width={70} height={70} />
        </div>
        <div className="flex flex-1 justify-center gap-10 py-8">
          <div className="cursor-pointer hover:text-blue-600 ">About</div>
          <div className="cursor-pointer hover:text-blue-600 ">Portfolio</div>
          <div className="cursor-pointer hover:text-blue-600 ">Contact</div>
        </div>
        <div className="">
          <Dropdown menu={{ items }}><UserOutlined className="hover:text-blue-600" style={{ fontSize: '35px' }} /></Dropdown>
        </div>

      </div>
      <div className="">
        <Divider className="border-red-500 w-[1200px]" />
      </div></>
  )
}
export default Header