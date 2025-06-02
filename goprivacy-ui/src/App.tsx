import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LearnMore from "./components/LearnMore"
import About from "./components/About"
import Contact from "./components/Contact"
import FileUpload from "./components/FileUpload"
import MetadataPreview from "./components/MetadataPreview"

export default function App() {
  return (
    <main className="font-sans text-gray-800 bg-white scroll-smooth">
      <Navbar />
      <Hero />
      <LearnMore />
      <MetadataPreview />
      <FileUpload />
      <About />
      <Contact />
    </main>
  )
}

