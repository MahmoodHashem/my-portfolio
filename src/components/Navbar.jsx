import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  }

  return (
    <nav className={`fixed left-0 right-0 px-5 z-[1000] max-w-6xl m-auto  transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className=" mx-auto w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-logo text-[#16f2b3] text-3xl uppercase font-bold">
            Mahmood
          </a>

          {/* Desktop Menu */}
          <div className="hidden font-heading  md:flex space-x-8">
            {['about', 'experience', 'skills', 'education', 'projects'].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className="text-lg text-white hover:text-pink-600 transition-colors duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </div>

        
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center"
          >
            <div className="relative -top-5 -left-5">
              {/* Code-inspired menu icon */}
              <motion.div
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                className="absolute w-8 flex items-center"
              >
                <span className="text-[#16f2b3] mr-1">&lt;</span>
                <motion.span
                  animate={isOpen ? { width: "16px" } : { width: "24px" }}
                  className="h-0.5 bg-[#16f2b3] origin-left"
                />
                <span className="text-[#16f2b3] ml-1">/&gt;</span>
              </motion.div>

              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-8 flex items-center"
                style={{ y: "8px" }}
              >
                <span className="text-pink-500 mr-1">{`{`}</span>
                <motion.span
                  className="h-0.5 w-5 bg-pink-500"
                />
                <span className="text-pink-500 ml-1">{`}`}</span>
              </motion.div>

              <motion.div
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: "16px" }}
                className="absolute w-8 flex items-center"
              >
                <span className="text-[#16f2b3] mr-1">&lt;</span>
                <motion.span
                  animate={isOpen ? { width: "16px" } : { width: "24px" }}
                  className="h-0.5 bg-[#16f2b3] origin-left"
                />
                <span className="text-[#16f2b3] ml-1">&gt;</span>
              </motion.div>
            </div>
          </motion.button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-[72px] left-0 right-0 bottom-0 h-[calc(100vh-72px)] bg-[#0f172a]/95 backdrop-blur-lg md:hidden overflow-y-auto"
            style={{ position: 'fixed', height: 'calc(100vh - 72px)' }}
          >
            <div className="flex flex-col items-center justify-center min-h-full space-y-8 py-8">
              {['about', 'experience', 'skills', 'education', 'projects'].map((item) => (
                <motion.a
                  key={item}
                  variants={itemVariants}
                  href={`/#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-white hover:text-pink-600 transition-colors duration-300 capitalize"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
