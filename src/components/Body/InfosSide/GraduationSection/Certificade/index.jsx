import styles from "./styles.module.scss"
import { HiLink } from "react-icons/hi"

export const Certificade = ({ name, link, image, key }) => {
  return (
    <div className={styles.container} key={key}>
      <img src={image} alt={name} />
      <div className={styles.containerProduct}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <HiLink size={40} />
        </a>
      </div>
    </div>
  )
}
