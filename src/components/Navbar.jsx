import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
const Navbar = () => {

  return (
    <nav className="flex mb-20 items-center justify-between py-6">
      <div className='flex gap-7 text-2xl'>
        <div className='hover:text-gray-200 hover:cursor-pointer' 
          >Home</div>
        <div className='hover:text-gray-200 hover:cursor-pointer'>About</div>
        <div className='hover:text-gray-200 hover:cursor-pointer'>Contact</div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareInstagram/>
        <FaSquareXTwitter/>
      </div>
    </nav>
  )
}

export default Navbar