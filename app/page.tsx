import Image from "next/image";
import AboutMe from "./aboutMe/AboutMe";
import Home from "./home/Home";
import Work from "./work/Work";
import Certification from "./certification/Certification";
import Projects from "./Projects/Projects";
import SideBar from "./components/SideBar";

export default function HomePage() {
  return (
    <main className="min-h-screen lg:p-20">
        <Home/>
        <AboutMe/>
        <Work/>
        <Certification/>
        <Projects/>
    </main>
  );
}
