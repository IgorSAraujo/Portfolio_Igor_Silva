import { Project } from "./Project"
import styles from "./styles.module.scss"

export const ProjectsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Projetos</h2>
        <p className="textInfos">
          Combinando as tecnologias que domino, desenvolvi projetos que aplicam
          esses conhecimentos de forma prática e inovadora, trazendo ideias à
          vida.
        </p>
      </div>
      <ul className={styles.listContainer}>
        <li>
          <Project name={"My Links"} />
        </li>
      </ul>
    </div>
  )
}
