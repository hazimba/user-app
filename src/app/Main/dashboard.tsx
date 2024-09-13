import { Button, Divider } from "antd";
import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import { skills } from "./skill";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

const Dashboard = () => {
  console.log('Supabase URL from env: 123', process.env.SUPABASE_URL);
  console.log(skills)

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Divider className="border-red-500 w-[1200px]" />
      </div>
      <Introduction />
      <About />
      <Skills />
      <Portfolio />
    </>
  )
}

export default Dashboard
