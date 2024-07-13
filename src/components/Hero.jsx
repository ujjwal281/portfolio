import { motion } from 'framer-motion';
import {HERO_CONTENT} from '../constants';
// import {profilePic} from "../assets/kevinRushProfile.png";

const container = (delay) => ({
    hidden : {x:-100 , opacity:0},
    visible : {
        x : 0,
        opacity : 1,
        transition : {duration : 0.5  , delay : delay},
    }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className=" flex flex-col items-center lg:items-start ">
                <motion.h1 
                 variants={container(0)}
                 initial = "hidden"
                 animate = "visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"> Ujjwal Singh Negi</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial = "hidden"
                animate = "visible"
                className="bg-gradient-to-r from-pink-300 via-slate-200  to-purple-400 bg-clip-text text-3xl tracking-tight text-transparent">
                    Front End Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial = "hidden"
                animate = "visible"
                 className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '>
                <motion.div 
                initial ={{x:100 , opacity:0}}
                animate = {{ x:0 , opacity:1 }}
                transition={{duration:1 , delay:1.2}}
                className='flex justify-center rounded-3xl border shadow-inner'>
                    <img
                    src={'https://cdn.sanity.io/images/s7xbv9bz/production/293578de2f73bad488202323f4507160da80154e-1600x1000.jpg?w=1600&h=1000&auto=format&fm=webp'} alt="Ujjwal Singh Negi" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero