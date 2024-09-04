import styles from "./styles.module.scss"

export const Tech = ({ icon: Icon, techName, techLevel, className }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTech}>
        <Icon size={60} className={className} />
        <span className={`subTitleTextInfos ${styles.techName}`}>
          {techName}
        </span>
      </div>
      <span className={`subTextInfos ${styles.techLevel}`}>
        <span className="subTextInfosB">Nível: </span>
        {techLevel}
      </span>
    </div>
  )
}
