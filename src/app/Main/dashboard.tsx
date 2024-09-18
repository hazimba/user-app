import { Button, Divider } from "antd";
import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import { skills } from "./skill";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";

const Dashboard = () => {
  console.log('Supabase URL from env: 123', process.env.SUPABASE_URL);
  console.log(skills)

  return (
    <>
      <Header />

      <Introduction />
      <About />
      <Skills />
      <Portfolio />
      <Gallery />
    </>
  )
}

export default Dashboard
