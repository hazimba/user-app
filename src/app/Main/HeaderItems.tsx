import { UserOutlined } from "@ant-design/icons"
import { Dropdown, Divider, MenuProps } from "antd"
import Image from "next/legacy/image"


const HeaderItems = () => {

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
    <div className="flex  items-center px-8">
      <div className="">
        <Image src="/logo2.png" alt="Hazim Bakar" width={70} height={70} />
      </div>
      <div className="flex flex-1 justify-center gap-10 py-8">
        <div className="cursor-pointer hover:text-blue-600 text-white text-xl">About</div>
        <div className="cursor-pointer hover:text-blue-600 text-white text-xl">Portfolio</div>
        <div className="cursor-pointer hover:text-blue-600 text-white text-xl">Contact</div>
      </div>
      <div className="">
        <Dropdown menu={{ items }}><UserOutlined className="hover:text-blue-600 text-white" style={{ fontSize: '35px' }} /></Dropdown>
      </div>
    </div>

  )
}
export default HeaderItems