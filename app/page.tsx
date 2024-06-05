import Image from "next/image";
import AboutMe from "./aboutMe/components/AboutMe";
import Home from "./home/Home";

export default function HomePage() {
  return (
    <main className="min-h-screen"  >
      
        <Home/>
    
        <AboutMe />
      
    </main>
  );
}
