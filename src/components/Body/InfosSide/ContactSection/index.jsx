import { ContactForm } from "./ContactForm"
import styles from "./styles.module.scss"

export const ContactsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Contato</h2>
        <p className="textInfos">
          Fique à vontade para entrar em contato! Estou sempre aberto a novas
          oportunidades, parcerias e desafios. Vamos conversar e descobrir como
          posso ajudar a transformar suas ideias em realidade.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
