import { InfosSide } from "./InfosSide"
import { ProfileSide } from "./ProfileSide"
import styles from "./styles.module.scss"

export const Body = ({ toogleMode, toggleTheme }) => {
  return (
    <>
      <ProfileSide toogleMode={toogleMode} toggleTheme={toggleTheme} />
      <InfosSide />
    </>
  )
}
