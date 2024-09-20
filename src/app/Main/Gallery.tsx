import { RightOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"


const Gallery = () => {


  return <>
    <div className="flex flex-col items-center justify-center my-20 gap-20">
      <div className='flex flex-col gap-20'>
        <div className='flex  justify-center items-center flex-col'>
          <div className="font-semibold text-center text-2xl md:text-3xl pb-2">gallery <span className='text-primary'>random</span></div>
          <hr className="border border-primary flex justify-center items-center align-middle w-[120px]" />
        </div>
        <div className=' justify-center flex flex-row gap-2'>
          <div className=' flex justify-center'>
            <Image src={"/greenhouse-1.png"} className="" alt="homa logo" height={0} width={800}></Image>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <Image src={"/greenhouse-2.png"} className="" alt="homa logo" height={0} width={400}></Image>
            <Image src={"/greenhouse-3.png"} className="" alt="homa logo" height={0} width={400}></Image>
            <Image src={"/greenhouse-4.png"} className="" alt="homa logo" height={0} width={400}></Image>
            <Image src={"/greenhouse-5.png"} className="" alt="homa logo" height={0} width={400}></Image>
          </div>
        </div>
      </div>
      <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CONTACT!}`} target='_blank'><Button type="primary" className="!border-primary !text-white !font-bold !rounded-full mt-8 !px-8" size="large" >
        <div className='flex flex-row gap-x-2'>
          make appointment
          <RightOutlined />
        </div>
      </Button></Link>

    </div>
  </>


}
export default Gallery