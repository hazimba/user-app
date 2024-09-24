"use client"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react";



const About = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [bar, setBar] = useState(0);

    const coreStory = [
        {
            year: '123',
            title: '123',
            context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non aliquid perferendis consequuntur vero suscipit officiis, placeat tempora ducimus sint nulla unde dolores quae in qui cupiditate recusandae esse, blanditiis laudantium veniam natus, eaque quas. Excepturi odit voluptas harum voluptates, aspernatur aliquam rem eveniet sint hic odio ad magnam dicta nam dolores accusantium id tenetur ipsam officiis facilis earum quibusdam doloremque quasi maxime fugit! Impedit accusamus error consectetur nam perferendis veniam fugit sapiente cupiditate harum itaque aut at, quo ea temporibus eos, adipisci hic beatae! Dolorem, explicabo sit asperiores laboriosam adipisci culpa. Quibusdam, corporis est. Dignissimos accusantium nostrum voluptatum architecto.'
        },
        {
            year: '123',
            title: '123',
            context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non aliquid perferendis consequuntur vero suscipit officiis, placeat tempora ducimus sint nulla unde dolores quae in qui cupiditate recusandae esse, blanditiis laudantium veniam natus, eaque quas. Excepturi odit voluptas harum voluptates, aspernatur aliquam rem eveniet sint hic odio ad magnam dicta nam dolores accusantium id tenetur ipsam officiis facilis earum quibusdam doloremque quasi maxime fugit! Impedit accusamus error consectetur nam perferendis veniam fugit sapiente cupiditate harum itaque aut at, quo ea temporibus eos, adipisci hic beatae! Dolorem, explicabo sit asperiores laboriosam adipisci culpa. Quibusdam, corporis est. Dignissimos accusantium nostrum voluptatum architecto.'
        },
        {
            year: '123',
            title: '123',
            context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non aliquid perferendis consequuntur vero suscipit officiis, placeat tempora ducimus sint nulla unde dolores quae in qui cupiditate recusandae esse, blanditiis laudantium veniam natus, eaque quas. Excepturi odit voluptas harum voluptates, aspernatur aliquam rem eveniet sint hic odio ad magnam dicta nam dolores accusantium id tenetur ipsam officiis facilis earum quibusdam doloremque quasi maxime fugit! Impedit accusamus error consectetur nam perferendis veniam fugit sapiente cupiditate harum itaque aut at, quo ea temporibus eos, adipisci hic beatae! Dolorem, explicabo sit asperiores laboriosam adipisci culpa. Quibusdam, corporis est. Dignissimos accusantium nostrum voluptatum architecto.'
        },
        {
            year: '123',
            title: '123',
            context: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non aliquid perferendis consequuntur vero suscipit officiis, placeat tempora ducimus sint nulla unde dolores quae in qui cupiditate recusandae esse, blanditiis laudantium veniam natus, eaque quas. Excepturi odit voluptas harum voluptates, aspernatur aliquam rem eveniet sint hic odio ad magnam dicta nam dolores accusantium id tenetur ipsam officiis facilis earum quibusdam doloremque quasi maxime fugit! Impedit accusamus error consectetur nam perferendis veniam fugit sapiente cupiditate harum itaque aut at, quo ea temporibus eos, adipisci hic beatae! Dolorem, explicabo sit asperiores laboriosam adipisci culpa. Quibusdam, corporis est. Dignissimos accusantium nostrum voluptatum architecto.23'
        },
        {
            year: '123',
            title: '123',
            context: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non aliquid perferendis consequuntur vero suscipit officiis, placeat tempora ducimus sint nulla unde dolores quae in qui cupiditate recusandae esse, blanditiis laudantium veniam natus, eaque quas. Excepturi odit voluptas harum voluptates, aspernatur aliquam rem eveniet sint hic odio ad magnam dicta nam dolores accusantium id tenetur ipsam officiis facilis earum quibusdam doloremque quasi maxime fugit! Impedit accusamus error consectetur nam perferendis veniam fugit sapiente cupiditate harum itaque aut at, quo ea temporibus eos, adipisci hic beatae! Dolorem, explicabo sit asperiores laboriosam adipisci culpa. Quibusdam, corporis est. Dignissimos accusantium nostrum voluptatum architecto.23'
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
                    <div className="text-sm font-sans text-justify">I began my career as an engineer in December 2020, specializing in Environmental Science, and spent two years leading projects like the 3A0A Honda initiative to localize car parts. In December 2022, I decided to shift into web development, embarking on a coding journey and fully transitioning into IT by November 2023. With 7 months of programming experience, Ive developed a niche in frontend development, working as a full-stack developer at Swift Haulage Berhad. Along the way, I gained expertise in HTML, CSS, and JavaScript at Sigma School, interned at ThunderQuote using Vue.js, Pug, and Bootstrap Vue, and built e-commerce platforms at HOMA SDN BHD with React, TypeScript, Next.js, and Tailwind. Im passionate about leveraging technology to deliver impactful solutions.</div>
                </div>
            </div>

            <div className="col-span-7 	" >
                <div className="font-semibold text-start text-2xl md:text-3xl pb-2">Experience</div>

                <div className='flex md:flex-row '>
                    <div ref={containerRef} className="md:pl-20 flex w-full overflow-y-auto h-[450px] justify-between flex-col md:gap-y-48 gap-y-24">
                        {coreStory.map((i: any, index: any) => (
                            <div key={index} className='flex md:flex-row flex-col gap-x-20 gap-y-8'>
                                <div className="flex md:w-2/5 flex-col gap-4">
                                    <div className="flex md:flex-row md:gap-4 gap-2 text-lg md:items-center align-middle flex-col">
                                        <div>{i.year}</div>
                                        <hr className="border border-primary flex justify-center items-center align-middle md:w-1/5 w-1/6" />
                                    </div>
                                    <h2 className="md:text-4xl md:pb-8 text-2xl">{i.title}</h2>
                                    <div className="md:text-lg text-lg text-justify">{i.context}</div>
                                </div>
                                <Image src={`/storyimage-${index}.jpg`} className="flex" alt="" style={{}} width={520} height={10} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About