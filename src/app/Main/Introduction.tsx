import { Button, Image } from "antd"


const Introduction = () => {

    return (
    <div className="flex w-screen justify-evenly h-[550px] items-center">
        <div className="">
          <div>IM HAZIM BAKAR</div>
          <br />
          <div>WEB && SOFTWARE</div>
          <div>DEVELOPER</div>
          <br />
          <Button>Contact</Button>
        </div>
        <div>
          <Image src="https://media.licdn.com/dms/image/v2/D5603AQFPc3H1g7MAzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721125764819?e=1731542400&v=beta&t=QpgBiq0l4hmQcX7XBIBkWX2aoU3TqHVlp_ZZO9vsPpk" width={200} alt="" />
        </div>
      </div>
    )
}
export default Introduction