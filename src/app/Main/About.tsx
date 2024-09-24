"use client"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react";



const About = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [bar, setBar] = useState(0);

    const coreStory = [
        {
            year: 'April 2024 - Current',
            title: 'Full Stack Developer',
            company: 'Swift Haulage Berhad',
            context: 'I am currently working as a full-stack developer at Swift Haulage Berhad. I am responsible for developing and maintaining the company’s software. I work closely with the design team to ensure that the website is user-friendly and visually appealing. I also collaborate with the backend team to ensure that the website is fast and responsive. I am passionate about leveraging technology to deliver impactful solutions. My role also involves debugging any application issues, identifying and implementing effective solutions, and providing daily updates in scrum meetings, as well as weekly progress reports to the project manager.'
        },
        {
            year: 'November 2023 - March 2024',
            title: 'Jr Software Developer',
            company: 'Homa Sdn Bhd',
            context: 'I worked as a junior software developer at HOMA SDN BHD. I was responsible for developing and maintaining the company’s e-commerce platforms. I worked closely with the design team to ensure that the platforms were user-friendly and visually appealing. I developed a new company website using React.js, JavaScript, Tailwind, HTML5, and Next.js, adhering to UI requirements and conducting thorough testing across various scenarios. Additionally, I will design, implement, and integrate the back-end of the web application using Supabase for efficient data management'
        },
        {
            year: 'June 2023 - October 2023',
            title: 'Intern Web Developer',
            company: 'ThunderQuote',
            context: 'Interned at ThunderQuote, a B2B marketplace for businesses to get quotes for services. I worked on the frontend using Vue.js, Pug, and Bootstrap Vue. I was assigned to a real project where I collaborated with a team to develop a complete feature for the Admin Homepage in the main mobile app. I independently learned Vue.js, Pug, Node.js, and Bootstrap Vue using company-provided materials, while also working with front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies like Node.js. I developed and implemented wireframes for the Admin Homepage and Claim Management based on client requirements using Figma, and later revamped the Admin Homepage to enhance its user-friendliness. I worked closely with clients, participating in weekly check-in meetings to present project progress, and assisted with test cases and User Acceptance Testing. Additionally, I played a key role in developing the company’s official website (thunderquote.com) using HubSpots landing page tools, collaborating closely with the marketing team. I also took part in a community service event organized by the company.'
        },
        {
            year: 'December 2022 - May 2023',
            title: 'Student',
            company: 'Sigma School',
            context: 'I attended Sigma School, a coding bootcamp that specializes in web development. I gained expertise in HTML, CSS, and JavaScript. I worked on various projects, including a weather app, a to-do list app, and a recipe app. I also learned how to use Git and GitHub to collaborate with other developers. I graduated from Sigma School in November 2023.'
        },
        {
            year: 'December 2020 - November 2022',
            title: 'Development Engineer',
            company: 'Erect Engineering Presswork Sdn Bhd',
            context: 'I began my career as an engineer specializing in Environmental Science. I led projects like the 3A0A Honda initiative to localize car parts. I worked closely with the design team to ensure that the parts were environmentally friendly and cost-effective. I also collaborated with the production team to ensure that the parts met quality standards. I gained expertise in project management, data analysis, and problem-solving.'
        }
    ]

    useEffect(() => {
        const logScrollY = () => {
            if (containerRef.current) {
                const scrollY = containerRef.current.scrollTop;
                setBar(scrollY);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', logScrollY);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', logScrollY);
            }
        };
    }, []);

    return (
        <div className="grid grid-cols-12  h-[500px] gap-20 gap-y-4" >
            <div className="col-span-1"></div>
            <div className="col-span-3">
                <div className="font-semibold text-start text-2xl md:text-3xl pb-2">About</div>
                <div className="flex gap-2">
                    <hr className="border-t-2 mt-3 h-4 border-gray-300 w-28" />
                    <div className="md:text-md text-lg text-justify">I began my career as an engineer in December 2020, specializing in the mechanical industry, where I led projects for the 3A0A Honda initiative to localize car parts over two years. In December 2022, I made the decision to transition into IT/Software, dedicating six months to self-learning HTML, CSS, and JavaScript, followed by a six-month internship. By November 2023, I had fully transitioned into IT, and I am now working as a full-stack developer at Swift Haulage Berhad. I am currently seeking a new opportunity to focus on web development and leverage my skills as a frontend developer.</div>
                </div>
            </div>

            <div className="col-span-7 	" >
                <div className="font-semibold text-start text-2xl md:text-3xl pb-2">Experience</div>

                <div className='flex md:flex-row'>
                    <div ref={containerRef} className="md:pl-20 flex w-full overflow-y-auto h-[450px] justify-between flex-col md:gap-y-48 gap-y-24">
                        {coreStory.map((i: any, index: any) => (
                            <div key={index} className='flex md:flex-row flex-col gap-x-20 gap-y-8'>
                                <div className="flex md:w-4/5 flex-col gap-4">
                                    <div className="flex md:flex-row md:gap-4 gap-2 text-lg md:items-center align-middle flex-col">
                                        <div>{i.year}</div>
                                        <hr className="border border-primary flex justify-center items-center align-middle md:w-1/5 w-1/6" />
                                    </div>
                                    <div>
                                        <h2 className="md:text-4xl text-2xl">{i.title}</h2>
                                        <h2 className="md:pb-8 text-md">{i.company}</h2>
                                    </div>
                                    <div className="md:text-lg text-lg text-justify">{i.context}</div>
                                </div>
                                <div className="flex justify-center items-center h-full" style={{}}>
                                    <Image src={`/storyimage-${index}.jpg`} alt="" style={{ objectFit: 'fill' }} width={400} height={400}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About