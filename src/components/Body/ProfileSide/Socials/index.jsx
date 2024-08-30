import styles from "./styles.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BsPersonLinesFill, BsBackspaceFill } from "react-icons/bs"
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri"

export const Socials = () => {
  const [showSocials, setShowSocials] = useState(false)

  return (
    <div className={styles.socials}>
      <AnimatePresence mode="wait">
        {showSocials ? (
          <motion.div
            key="social-icons"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.socialsAnimation}
          >
            <span
              className={styles.social}
              onClick={() => setShowSocials(false)}
            >
              <BsBackspaceFill size={16} />
            </span>
            <a
              className={styles.social}
              href="https://x.com/IgorSaraujoDev"
              target="_blank"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              className={styles.social}
              href="https://www.instagram.com/igorsaraujo.dev/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              <RiInstagramFill size={20} />
            </a>
            <a
              className={styles.social}
              href="https://wa.link/hzoi4d"
              target="_blank"
            >
              <RiWhatsappFill size={20} />
            </a>
            <a
              className={styles.social}
              href="https://linkedin.com/in/igorsaraujo2903/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className={styles.social}
              href="https://github.com/IgorSAraujo"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </motion.div>
        ) : (
          <motion.span
            key="toggle-icon"
            className={styles.social}
            onClick={() => setShowSocials(true)}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <BsPersonLinesFill size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
