import Image from "next/image";
import AboutMe from "./aboutMe/components/AboutMe";
import Home from "./home/Home";
import Work from "./work/Work";
import Certification from "./certification/Certification";

export default function HomePage() {
  return (
    <main className="min-h-screen"  >
      
        <Home/>
        <AboutMe/>
        <Work/>
        <Certification/>
    </main>
  );
}
