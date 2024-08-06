import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{opacity : 1 , y: 0 }}
        initial ={{opacity : 0 , y:-100}}
        transition={{duration : 0.5}} 
        whileHover={{ scale: 1.1 }}
        className=" my-10 text-center text-4xl rounded-lg hover ">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-semibold text-white backdrop-blur-3xl">
            Get in Touch
          </span>
        </button>
        </motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity : 1 , x: 0 }}
            initial ={{opacity : 0 , x:100}}
            transition={{duration : 1.5}}

            className="p-4">
            {CONTACT.phoneNo}
            </motion.p>
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
            
        </div>
    </div>
  )
}

export default Contact