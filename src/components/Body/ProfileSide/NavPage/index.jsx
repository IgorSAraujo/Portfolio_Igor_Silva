import styles from "./styles.module.scss"
import { AiOutlineHome } from "react-icons/ai"
import { BsPersonVcardFill } from "react-icons/bs"
import { FaCode } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"
import { PiCertificateFill } from "react-icons/pi"
import { IoIosMail } from "react-icons/io"
export const NavPage = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <li className="textProfile">
          <a href="#home" className={styles.item}>
            <AiOutlineHome size={25} className={`${styles.itemIcon}`} />
            Inicio Home
          </a>
        </li>
        <li className="textProfile">
          <a href="" className={styles.item}>
            <BsPersonVcardFill size={25} className={`${styles.itemIcon}`} />
            Sobre-Mim
          </a>
        </li>
        <li className="textProfile">
          <a href="" className={styles.item}>
            <FaCode size={25} className={`${styles.itemIcon}`} />
            Tecnologias
          </a>
        </li>
        <li className="textProfile">
          <a href="" className={styles.item}>
            <GrProjects size={25} className={`${styles.itemIcon}`} />
            Projetos
          </a>
        </li>
        <li className="textProfile">
          <a href="" className={styles.item}>
            <PiCertificateFill size={25} className={`${styles.itemIcon}`} />
            Certificados
          </a>
        </li>
        <li className="textProfile">
          <a href="" className={styles.item}>
            <IoIosMail size={25} className={`${styles.itemIcon}`} />
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}
