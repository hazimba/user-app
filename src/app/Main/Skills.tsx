import { skills } from "./skill"

const Skills = () => {

  const skillCard = () => {
    return (
      <>
        <div className="grid grid-cols-3 gap-x-12 gap-y-4">
          {skills.map((i: any, index: number) => (
            <div key={index} className="border-2 flex justify-center rounded-xl p-6 bg-[#15292B] hover:bg-white hover:text-black hover:cursor-pointer">
              {i.name}
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="my-12 py-12 flex justify-between items-center flex-col w-screen gap-y-4 w-screen bg-black">
      <div className="text-2xl">SKILL</div>
      <div>{skillCard()}</div>
    </div>
  )
}
export default Skills