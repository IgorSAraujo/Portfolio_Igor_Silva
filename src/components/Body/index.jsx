import { InfosSide } from "./InfosSide"
import { ProfileSide } from "./ProfileSide"
import styles from "./styles.module.scss"

export const Body = ({ toogleMode, toggleTheme }) => {
  return (
    <div className={styles.container}>
      <ProfileSide
        className={styles.containerProfile}
        toogleMode={toogleMode}
        toggleTheme={toggleTheme}
      />
      <InfosSide className={styles.containerInfos} />
    </div>
  )
}
