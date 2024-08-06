import { motion } from "framer-motion"
import { PROJECTS } from "../constants"
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 

        whileInView={{opacity : 1 , y: 0 }}
        initial ={{opacity : 0 , x:-100}}
        transition={{duration : 1.5}}

         className="my-20 text-center text-4xl pl-40 font-semibold">
            Projects
        </motion.h1>
        
        <div className="">
            {PROJECTS.map((project , index) => {
                return(<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity : 1 , x: 0 }}
                    initial ={{opacity : 0 , x:-100}}
                    transition={{duration : 0.5}}
                    className="w-full lg:w-1/4 ">
                    <a href={project.link}>
                    <motion.img 
                     whileHover={{ scale: 1.1 }}
                        src={project.image}
                        width={150}
                        height={150} 
                        alt={project.title}
                        className="mb-6 rounded"
                        />
                    </a>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity : 1 , x: 0 }}
                    initial ={{opacity : 0 , x:100}}
                    transition={{duration : 1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-lg pl-4 hover:scale-105 cursor-pointer">{project.title}</h6>
                    <p className="m-4 text-neutral-400 font-medium">{project.description}</p>
                    {project.technologies.map((tech,index)=>{
                        return(<span key={index} className="mr-2 rouned bg-neutral-900 text-sm font-medium text-purple-800">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 mt-3">
                            {tech}
                            </button>
                        </span>)
                    })}
                    </motion.div>
                </div>)
            })}
        </div>
    </div>
       
  )
}

export default Projects