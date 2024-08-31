import styles from "./styles.module.scss"
import photo from "../../../../assets/03_portfolio.png"
import backgroundVideo from "../../../../assets/Plexus.mp4"
import { ReactTyped } from "react-typed"

export const HomeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}>
        <video src={backgroundVideo} autoPlay muted loop playsInline />
      </div>
      <div className={styles.containerInfos}>
        <div className={styles.containerTitle}>
          <h2 className="titleBanner">Igor Araujo</h2>
          <span className="subTitleBanner">
            Desenvolvedor&nbsp;
            <ReactTyped
              className={styles.devText}
              strings={[" Front-End", " Fullstack"]}
              typeSpeed={50} // Velocidade de digitação
              backSpeed={50}
              backDelay={150}
              loop
            />
          </span>
        </div>
        <div className={styles.photoContainer}>
          <img src={photo} alt="Foto de igor em pé olhando para o lado" />
        </div>
      </div>
    </div>
  )
}
