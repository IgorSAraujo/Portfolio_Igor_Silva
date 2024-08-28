import styles from "./styles.module.scss"

export const ProfileSide = ({ toogleMode, toggleTheme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="" alt="" />
        <h2>Igor Araujo</h2>
      </div>
      <div className={styles.socials}>
        <a
          className="Social"
          href="https://x.com/IgorSaraujoDev"
          target="blank"
        >
          Twitter
        </a>
        <a
          className="Social"
          href="https://www.instagram.com/igorsaraujo.dev/?utm_source=ig_web_button_share_sheet"
          target="blank"
        >
          Insta
        </a>
        <a className="Social" href="https://wa.link/hzoi4d" target="blank">
          Whats
        </a>
        <a
          className="Social"
          href="https://linkedin.com/in/igorsaraujo2903/"
          target="blank"
        >
          Linkedin
        </a>
        <a
          className="Social"
          href="https://github.com/IgorSAraujo"
          target="blank"
        >
          GitHub
        </a>
      </div>
      <div className={styles.toogleContainer}>
        <span></span>
      </div>
      <nav className={styles.navContainer}>
        <span>Inicio</span>
        <span>Sobre-Mim</span>
        <span>Tecnologias</span>
        <span>Projetos</span>
        <span>Contato</span>
      </nav>
    </div>
  )
}
