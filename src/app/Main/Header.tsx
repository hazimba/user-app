import { UserOutlined } from "@ant-design/icons"
import Image from "next/image"
import { Button, Dropdown, Space } from 'antd';
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
    <div className="flex w-screen items-center px-8">
      <div className="">
        <Image src="/logo2.png" alt="Hazim Bakar" width={50} height={50} />
      </div>
      <div className="flex flex-1 justify-center gap-10 py-8">
        <div>About</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
      <div className="">
        <Dropdown menu={{ items }}><UserOutlined style={{ fontSize: '20px' }} /></Dropdown>
      </div>
    </div>


  )
}
export default Header