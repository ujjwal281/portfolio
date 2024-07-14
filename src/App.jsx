import { motion} from "framer-motion"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"



function App() {


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-200 selection:bg-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
      </div>

      </div>
      <motion.div transition={{duration:2}} whileInView={{opacity : 1 , y: 0 }}  className="container mx-auto px-8">

      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>

      </motion.div>
    </div>
  )
}

export default App
