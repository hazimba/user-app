import { Button } from "antd"

import Image from "next/image"

const Introduction = () => {

  const random = () => {
    const name = ['H', 'A', 'Z', 'I', 'M', 'B', 'A', 'K', 'A', 'R'];

    return name.map((n, index) => {
      const randomPadding = Math.floor(Math.random() * 20);
      return (
        <span key={index} style={{ paddingLeft: `${randomPadding}px`, paddingBottom: `${randomPadding}px` }}>
          {n}
        </span>
      );
    });
  };



  return (
    <div className="flex w-screen justify-evenly h-[450px] items-center font-sans">
      <div className="flex flex-col gap-5">
        <div className="text-2xl flex items-end justify-center">IM <span className="text-5xl pl-2 pr-4">HAZIM BAKAR</span></div>

        <div>
          <div>JAVASCRIPT REACT JS</div>
          <div>DEVELOPER</div>
        </div>

        <div className="pt-20">
          <Button type="primary">Contact</Button>
        </div>
      </div>
      <div className="">
        <Image className="rounded-full" width={350} height={2000} src="/hazim2.png" alt="" />
      </div>
    </div>
  )
}
export default Introduction