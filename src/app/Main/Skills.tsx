import { skills } from "./skill"

const Skills = () => {

    const skillCard = () => {
        return (
         <>
           <div className="grid grid-cols-3 gap-x-12 gap-y-4">
           {skills.map((i: any, index: number) => (
             <div key={index} className="border-2 flex justify-center rounded-xl p-6 hover:bg-white hover:text-black">
                 {i.name}
             </div>
           ))}
           </div>
         </>
        )
       }

    return (
        <div className="py-12 flex justify-between items-center flex-col w-screen gap-y-4">
        <div className="text-2xl">SKILL</div>
        <div>{skillCard()}</div>
      </div>
    )
}
export default Skills