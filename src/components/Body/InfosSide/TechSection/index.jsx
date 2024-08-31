import styles from "./styles.module.scss"

export const TechSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Tecnologias</h2>
        <p className="textInfos"></p>
      </div>
      <ul className={styles.listContainer}></ul>
    </div>
  )
}
