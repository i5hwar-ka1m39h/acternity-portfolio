import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { Process } from "@/components/Process";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className=" relative flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5 bg-black-100">
     <div className=" max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Clients/>
      <Experience/>
      <Process/>
      <Footer/>
     </div>
    </main>
  );
}
