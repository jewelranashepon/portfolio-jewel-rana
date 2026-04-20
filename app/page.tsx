import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
