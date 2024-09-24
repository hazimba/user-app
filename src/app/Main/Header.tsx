"use client"
import { DownOutlined, UpOutlined, UserOutlined } from "@ant-design/icons"
import Image from "next/legacy/image"
import { Button, Collapse, Divider, Dropdown, Space } from 'antd';
import type { CollapseProps, MenuProps } from 'antd';
import { useState } from "react";
import HeaderItems from "@/app/Main/HeaderItems";


const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true);


  const backgroundImage: React.CSSProperties = {
    backgroundSize: 'cover',
    backgroundImage: "url('/images/shop-landing/Shop_Images.jpg')",
    transition: 'height 0.2s ease'
  }

  const items: CollapseProps["items"] = [
    {
      key: "1",
      className: '!flex !flex-col-reverse',
      headerClass:
        "!border-none !rounded-none !flex items-center justify-center",
      style: backgroundImage,
      label: "",
      children: (
        <HeaderItems />
      ),
    },
  ];

  const scrollTop = () => {
    const element = document.getElementById("smart-filter");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (element) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const customExpandIcon = (panelProps: any) => {
    setIsOpen(panelProps.isActive);
    return (
      <div onClick={scrollTop} className="w-screen !p-0 !flex !items-center !justify-center">
        {panelProps.isActive ? <UpOutlined style={{ color: 'white' }} /> : <DownOutlined style={{ color: 'white' }} />}
      </div>
    );
  };

  return (
    <Collapse
      items={items}
      defaultActiveKey={[1]}
      className={`collapse-no-padding !rounded-none md:sticky ${isOpen ? '' : 'md:top-[0] md:!z-[900]'}`}
      ghost
      expandIcon={customExpandIcon}
    />
  )
}
export default Header