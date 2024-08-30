import styles from "./styles.module.scss"
import profilePic from "../../../assets/02_portfolio.png"
import { Socials } from "./Socials"
import { ToogleTheme } from "./ToogleTheme"
import { NavPage } from "./NavPage"

export const ProfileSide = ({ toogleMode, toggleTheme }) => {
  return (
    <div className={styles.container}>
      <ToogleTheme toogleMode={toogleMode} toggleTheme={toggleTheme} />
      <div className={styles.profile}>
        <div className={styles.profileImg}>
          <img
            className={styles.profilePic}
            src={profilePic}
            alt="Foto de Igor Sentado na Cadeira"
          />
          <span className={styles.imgBackground}></span>
        </div>
        <h1 className="titleProfile">Igor Araujo</h1>
      </div>
      <Socials />
      <NavPage />
    </div>
  )
}
