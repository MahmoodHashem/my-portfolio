import { motion } from "framer-motion"
import { personalData } from "../data/personal-data"
import { MdDownload } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import HeaderCard from "./HeaderCard"
import { IoIosContact } from "react-icons/io";

function HeroSection() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const socialIconsAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }

  const backgroundAnimation = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  }

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="relative flex flex-col items-center justify-between py-4 lg:py-12"
    >
      <motion.img
        {...backgroundAnimation}
        src="/hero.svg"
        alt="Hero"
        width={1520}
        height={795}
        className="absolute -top-[98px] z-0"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 mt-12">
        <motion.div 
          variants={staggerContainer}
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 relative"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
          >
            Hello, <br />
            This is {' '}
            <span className="text-pink-500 hover:text-[#16f2b3] transition-colors duration-300">
              {personalData.name}
            </span>
            {` , I'm a Professional `}
            <span className="text-[#16f2b3] hover:text-pink-500 transition-colors duration-300">
              {personalData.designation}
            </span>.
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            className="my-12 flex items-center gap-5"
          >
            {[
              { icon: FaGithub, link: personalData.github },
              { icon: FaLinkedin, link: personalData.linkedin },
              { icon: BsTwitterX, link: personalData.twitter }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                variants={socialIconsAnimation}
                href={social.link}
                target="_blank"
                className="text-pink-500"
              >
                <social.icon size={30} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-3"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] flex items-center gap-1 hover:gap-3 transition-all duration-300">
                <span>Contact me</span>
                <IoIosContact size={16} />
              </button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-300"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 "
        >
          <HeaderCard />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
