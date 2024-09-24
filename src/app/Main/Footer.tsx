import Image from "next/legacy/image";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";

// interface Props {
//   loc: any;
// }

type FooterType = {
  text: string;
  link: string;
};

const Footer = () => {

  const navigation: FooterType[] = [
    { text: 'about', link: "/about" },
    { text: 'skill', link: "/privacy-policy" },
    { text: 'portfolio', link: "/terms" },
  ];
  const customerService: FooterType[] = [
    { text: 'contact', link: "/contact-us" },
  ];
  const members: FooterType[] = [
    {
      text: 'account',
      link: "/account/settings/profile",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center max-w-7xl w-full py-16 px-4 md:px-0">
        <div className="flex flex-col justify-center  md:px-0" >
          <div className=" text-white flex justify-between md:flex-row flex-col">
            <div className="flex gap-8 md:flex-[2] md:flex-row flex-col">
              <div className="font-semibold gap-4 flex flex-col ">
                <div>Navigation</div>
                <div className="flex flex-col font-normal text-gray-4" >
                  {navigation.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
              <div className="font-semibold gap-4 flex flex-col ">
                Service
                <div className="flex flex-col font-normal text-gray-4" >
                  {customerService.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
              <div className="font-semibold gap-4 flex flex-col ">
                <div>Members</div>
                <div className="flex flex-col font-normal text-gray-4" >
                  {members.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:justify-between md:flex-1 md:mt-0 mt-4 gap-8">
              <div className="flex gap-4 flex-col">
                <div className="font-semibold flex">Find Me On</div>
                <div className="flex w-[120px] justify-between">
                  <Link href="https://github.com/hazimba" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}>
                      <FaGithub />
                    </span></Link>
                  <Link href="https://www.youtube.com/hazimba" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}><CiInstagram /></span>
                  </Link>
                  <Link href="https://linkedin.com/in/hazimba" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}><FaLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm pt-16 text-gray-4 flex w-full text-left ">© Copyright 2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
