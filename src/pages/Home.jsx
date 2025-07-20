import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}

      <ThemeToggle />

      {/*Background effects */}

      <StarBackground />

      {/*Navbar */}
      <Navbar />

      {/*Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Home;
