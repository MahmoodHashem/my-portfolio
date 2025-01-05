import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { personalData } from "../data/personal-data"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const sideBarVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      id="about"
      className="my-12 lg:my-16 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        variants={sideBarVariants}
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div 
          variants={contentVariants}
          className="order-2 lg:order-1"
        >
          <motion.p 
            variants={contentVariants}
            className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"
          >
            Who am I?
          </motion.p>
          <motion.p 
            variants={contentVariants}
            className="text-gray-200 text-sm lg:text-lg"
          >
            {personalData.description}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={imageVariants}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.img
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg grayscale hover:grayscale-0 cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
