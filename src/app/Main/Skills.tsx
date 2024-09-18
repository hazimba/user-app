import { skills } from "./skill"

const Skills = () => {

  const skillCard = () => {
    return (
      <>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((i: any, index: number) => (
            <div key={index} style={{ position: 'relative' }}>
              <span className="w-full flex items-end justify-end absolute top-2 right-2" style={{ textAlign: 'end' }}>
                <span className="bg-slate-600 rounded-full border-2 p-2">{i.experience}</span>
              </span>
              <div className="border-2 static flex flex-col items-center m-6 justify-center rounded-xl p-8 bg-[#15292B] hover:bg-white hover:text-black hover:cursor-pointer">
                <span style={{ fontSize: '50px', paddingBottom: '10px' }}>{i.logo}</span>
                <span>{i.name}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="my-12 py-12 flex justify-center h-screen items-center flex-col w-screen gap-y-4 bg-[#181818]">
      <div className="text-2xl mb-12">SKILL</div>
      <div>{skillCard()}</div>
    </div>
  )
}
export default Skills