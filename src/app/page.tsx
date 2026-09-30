import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Organizations from "@/components/Organizations";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-neutral-50 min-h-screen relative">
      <StarsBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Organizations />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
