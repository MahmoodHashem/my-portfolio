import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { educations } from "../data/educations"
import { BsPersonWorkspace } from "react-icons/bs"
import educationLottie from '../assets/lottie/study.json'
import AnimationLottie from "./AnimationLottie"
import GlowCard from "./GlowCard"

function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="education" 
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <motion.div 
        variants={headerVariants}
        className="flex justify-center -translate-y-[1px]"
      >
        <div className="w-3/4">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"
          />
        </div>
      </motion.div>

      <motion.div 
        variants={headerVariants}
        className="flex justify-center my-5 lg:py-8"
      >
        <div className="flex items-center">
          <motion.span 
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[#1a1443]"
          ></motion.span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <motion.span 
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[#1a1443]"
          ></motion.span>
        </div>
      </motion.div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div 
            variants={headerVariants}
            className="flex justify-center items-start"
          >
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={educationLottie} />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                custom={index}
                variants={cardVariants}
              >
                <GlowCard identifier={`education-${education.id}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 relative text-white"
                  >
                    <img
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="text-violet-500"
                      >
                        <BsPersonWorkspace size={36} />
                      </motion.div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education
