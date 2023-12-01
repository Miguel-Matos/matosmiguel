import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <ParticlesBackground />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>
      <Footer />
    </main>
  );
}

export default App;
