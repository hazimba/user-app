import Link from "next/link"
import { portfolio, sideProject } from "./skill"
import Image from "next/legacy/image"



const Portfolio = () => {

    const portfolioExperiences = () => {
        return (
            <>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    {portfolio.map((i: any, index: number) => (
                        <Link key={index} href={i.link} target="_blank">
                            <div className="border-2 flex flex-col text-center justify-center rounded-xl h-96 w-80 px-4 hover:bg-white hover:text-black hover:cursor-pointer relative">
                                <div className="absolute inset-0 w-full h-full">
                                    <Image src={i.image} alt={i.name} className="opacity-30 object-cover w-full h-full" layout="fill" />
                                </div>
                                <div className="relative z-10">
                                    <div className="pb-4 text-xl font-">{i.name}</div>
                                    <div>{i.info}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
    const portfolioSideProject = () => {

        return (
            <>
                <div className="grid grid-rows-4 gap-6">
                    {sideProject.map((i: any, index: number) => (
                        <div key={index} className="border-2 flex justify-center rounded-xl p-6 bg-[#15292B] hover:bg-white hover:text-black hover:cursor-pointer">
                            {i.name}
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="py-12 flex justify-between items-center flex-col  gap-y-4">
            <div className='flex justify-center items-center flex-col'>
                <div className="font-semibold text-center text-2xl md:text-3xl pb-2">Portfolio</div>
            </div>
            <div className="flex gap-12">
                <div className="">
                    <div className="flex w-full justify-center pb-4">WORKING EXPERIENCE</div>
                    <div>{portfolioExperiences()}</div>
                </div>
                <div>
                    <div className="flex w-full justify-center pb-5">SIDE PROJECT</div>
                    <div>{portfolioSideProject()}</div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio