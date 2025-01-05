import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { personalData } from '../data/personal-data'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import ContactForm from './ContactForm'

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const sideBarVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="contact" 
      className="my-12 lg:my-16 relative mt-24 text-white"
    >
      <motion.div
        variants={sideBarVariants} 
        className="hidden lg:flex flex-col items-center absolute top-24 -right-8"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          variants={contentVariants}
        >
          <ContactForm />
        </motion.div>

        <motion.div 
          variants={contentVariants}
          className="lg:w-3/4"
        >
          <div className="flex flex-col gap-5 lg:gap-9">
            {[
              { content: personalData.email },
              { content: personalData.phone },
              { content: personalData.address }
            ].map((item, index) => (
              <motion.p
                key={index}
                variants={contentVariants}
                className="text-sm md:text-xl flex items-center gap-3"
              >
                <span>{item.content}</span>
              </motion.p>
            ))}
          </div>

          <motion.div 
            variants={contentVariants}
            className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10"
          >
            {[
              { Icon: FaGithub, link: personalData.github },
              { Icon: FaLinkedin, link: personalData.linkedin },
              { Icon: BsTwitterX, link: personalData.twitter }
            ].map((social, index) => (
              <motion.a
                key={index}
                custom={index}
                variants={socialIconVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                href={social.link}
              >
                <social.Icon
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactSection
