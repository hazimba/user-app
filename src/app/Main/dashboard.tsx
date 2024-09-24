import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import Footer from "./Footer";
import ReachMe from "./ReachMe";

const Dashboard = () => {

  return <div className="w-[100%]">
    <Header />
    <Introduction />
    <About />
    <Skills />
    <Portfolio />
    <Gallery />
    <ReachMe />
    <Footer />
  </div>

}

export default Dashboard
