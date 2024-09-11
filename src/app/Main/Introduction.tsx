import { Button } from "antd"
 
import Image from "next/image"

const Introduction = () => {

    return (
    <div className="flex w-screen justify-evenly h-[450px] items-center">
        <div className="">
          <div>IM <span className="font-sans">HAZIM BAKAR</span></div>
          <br />
          <div>WEB && SOFTWARE</div>
          <div>DEVELOPER</div>
          <br />
          <Button>Contact</Button>
        </div>
        <div className="">
          <Image className="rounded-full" width={350} height={2000} src="/hazim2.png" alt="" />
        </div>
      </div>
    )
}
export default Introduction