import Image from "next/image";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
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
  // TODO: Commented By eujie to temporarily remove unused footer
  const aboutHOMA2u: FooterType[] = [
    { text: 'about us', link: "/about" },
    // { text: loc.master_landing.how_to_order, link: '/contact-us' },
    { text: 'privacy policy', link: "/privacy-policy" },
    { text: 'term and use', link: "/terms" },
  ];
  const sitemap: FooterType[] = [];
  const customerService: FooterType[] = [
    { text: 'contact', link: "/contact-us" },
    // { text: loc.master_landing.returns, link: '/contact-us' }
  ];
  const members: FooterType[] = [
    {
      text: 'account',
      link: "/account/settings/profile",
    },
    // { text: loc.general.merchant.toUpperCase(), link: '/contact-us' },
    // { text: loc.general.order_history.toUpperCase(), link: '/contact-us' }
  ];

  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col justify-center max-w-7xl w-full py-16 px-4 md:px-0">
        <div className="flex flex-col justify-center  md:px-0" >
          <div className=" text-white flex justify-between md:flex-row flex-col">
            <div className="flex gap-8 md:flex-[2] md:flex-row flex-col">
              <div className="font-semibold gap-4 flex flex-col ">
                <div>{'nav'}</div>
                <div className="flex flex-col font-normal text-gray-4" >
                  {aboutHOMA2u.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
              <div className="font-semibold gap-4 flex flex-col ">
                <div> {'sitemap'}</div>
                <div className="flex flex-col font-normal text-gray-4" >
                  {sitemap.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
              <div className="font-semibold gap-4 flex flex-col ">
                service
                <div className="flex flex-col font-normal text-gray-4" >
                  {customerService.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
              <div className="font-semibold gap-4 flex flex-col ">
                <div>members</div>
                <div className="flex flex-col font-normal text-gray-4" >
                  {members.map((i, index) => <Link key={index} href={i.link}>{i.text}</Link>)}
                </div>
              </div>
            </div >
            <div className="flex flex-col md:justify-between md:flex-1 md:mt-0 mt-4 gap-8">
              <div className="flex gap-4 flex-col">
                <div className="font-semibold flex">Find Me On</div>
                <div className="flex w-[120px] justify-between">
                  <Link href="https://www.facebook.com/HOMA2u/" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}>
                      <SiFacebook />
                    </span></Link>
                  <Link href="https://www.youtube.com/@HOMASTORIES" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}><CiInstagram /></span>
                  </Link>
                  <Link href="https://www.instagram.com/homa2u/" target="_blank" className="cursor-pointer">
                    <span style={{ fontSize: '30px' }}><FaLinkedin />
                    </span>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="text-sm pt-16 text-gray-4 flex w-full text-left ">© Copyright 2024 HOMA SDN BHD (1221809K). All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
