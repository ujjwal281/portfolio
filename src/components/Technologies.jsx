import {  motion } from "framer-motion"
import { DiJavascript } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"


const iconVariants = (duration) => ({
    initial : {y:-10},
    animate :{
        y:[10,-10],
        transition : {
            duration : duration,
            ease : 'linear',
            repaet : Infinity,
            repeatType : "reverse" ,
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h1 whileInView={{opacity : 1 , y: 0 }}
            initial ={{opacity : 0 , x:-100}}
            transition={{duration : 1.5}}
             className="my-20 text-center text-3xl pl-40">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity : 1 , x: 0 }}
            initial ={{opacity : 0 , x:-100}}
            transition={{duration : 0.5}}
            className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
             variants = {iconVariants(5)}
             initial = "initial" 
             animate = "animate"
            className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl">
                <RiReactjsLine className="text-7xl text-cyan-500 hover:scale-125"/>
            </motion.div>
            <motion.div
             variants = {iconVariants(5)}
             initial = "initial" 
             animate = "animate"
            className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl">
                <DiJavascript className="text-7xl text-yellow-500 hover:scale-125"/>
            </motion.div>
            <motion.div
             variants = {iconVariants(5)}
             initial = "initial" 
             animate = "animate"
            className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl">
                <RiTailwindCssFill className="text-7xl text-blue-500 hover:scale-125"/>
            </motion.div>
            <motion.div variants = {iconVariants(4)}
             initial = "initial" 
             animate = "animate"
              className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl">
                
                <SiMongodb className="text-7xl text-green-500 hover:scale-125"/>
            </motion.div>
            <motion.div variants = {iconVariants(5)}
             initial = "initial" 
             animate = "animate"
             className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl">
                <TbBrandNextjs className="text-7xl  hover:scale-125"/>
            </motion.div>
            <motion.div variants = {iconVariants(4)}
             initial = "initial" 
             animate = "animate"
              className="flex flex-wrap items-center border-neutral-800 p-4 border-4 rounded-xl"> 
            <FaNodeJs className="text-7xl text-green-500 hover:scale-125"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies