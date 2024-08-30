import styles from "./styles.module.scss"
import { motion } from "framer-motion"
import { MdSunny } from "react-icons/md"
import { IoIosMoon } from "react-icons/io"

export const ToogleTheme = ({ toogleMode, toggleTheme }) => {
  return (
    <div className={styles.toogleContainer} onClick={toggleTheme}>
      <motion.span
        initial={{ x: toogleMode ? 0 : 45 }}
        animate={{ x: toogleMode ? 0 : 25 }}
        transition={{ duration: 0.3 }} // Tempo de transição suave
        className={styles.icon}
      >
        {toogleMode ? (
          <MdSunny size={20} className={styles.icon} />
        ) : (
          <IoIosMoon size={20} className={styles.icon} />
        )}
      </motion.span>
    </div>
  )
}
