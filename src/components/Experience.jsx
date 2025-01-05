import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { experiences } from "../data/experience"
import AnimationLottie from "./AnimationLottie"
import experienceLottie from '../assets/lottie/code.json'
import GlowCard from "./GlowCard"

function Experience() {
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
      id="experience" 
      className="relative z-50  border-[#25213b]"
    >
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        src="/section.svg"
        alt="Hero"
        width={2572}
        height={795}
        className="absolute top-10 -z-10"
      />

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
            Experiences
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
            <div className="w-full h-full">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                custom={index}
                variants={cardVariants}
              >
                <GlowCard identifier={`experience-${experience.id}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 relative"
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
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <div>He</div>
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
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

export default Experience
