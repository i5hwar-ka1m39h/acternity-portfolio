import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className=" relative flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-10 px-5 bg-black-100">
     <div className=" max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
     </div>
    </main>
  );
}
