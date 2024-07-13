import {  motion } from "framer-motion"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiMysql } from "react-icons/si"
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
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity : 1 , y: 0 }}
            initial ={{opacity : 0 , x:-100}}
            transition={{duration : 1.5}}
             className="my-20 text-center text-4xl">Technologies</motion.h1>
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
            <motion.div variants = {iconVariants(5)}
             initial = "initial" 
             animate = "animate"
             className="flex flex-wrap items-center border-4 rounded-xl  border-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-500 hover:scale-125"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies