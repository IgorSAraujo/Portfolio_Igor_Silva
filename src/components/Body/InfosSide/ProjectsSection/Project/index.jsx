import styles from "./styles.module.scss"
import { HiLink } from "react-icons/hi"

export const Project = ({ img, name, link, description }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="Projeto de Igor Araujo" />
      <div className={styles.containerProduct}>
        <div className={styles.containerName}>
          <span className="subTitleTextInfos">{name}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <HiLink size={21} />
        </a>
        <p className="subTextInfos">{description}</p>
      </div>
    </div>
  )
}
