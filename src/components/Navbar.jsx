import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {

  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);


    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`md:flex w-screen top-0 left-0 px-5 py-3 items-center md:justify-between z-20 fixed ${ scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className='flex gap-7 text-2xl justify-center'>
        
        <motion.div whileHover={{ scale: 1.1 }} onClick={() => {
            window.scrollTo(0, 0);
          }} 
          className='hover:text-gray-200 hover:cursor-pointer' 
          >Home</motion.div>

        <motion.div whileHover={{ scale: 1.1 }} onClick={() => {
            window.scrollTo(400, 500);
                  }} className='hover:text-gray-200 hover:cursor-pointer'>About</motion.div>

        <motion.div whileHover={{ scale: 1.1 }} onClick={() => {
                window.scrollTo(10000,11000);
                  }} className='hover:text-gray-200 hover:cursor-pointer'>Contact</motion.div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/ujjwal-negi-74528a228/"> <FaLinkedin/></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/"> <FaGithub/></motion.a>
        {/* <motion.a whileHover={{ scale: 1.1 }} href=""> <FaSquareInstagram/></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href=""> <FaSquareXTwitter/></motion.a> */}
      </div>
    </nav>
  )
}

export default Navbar