import styles from "./styles.module.scss"

export const GraduationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Certificados</h2>
        <p className="textInfos">
          Orgulhosamente apresento meus certificados, que atestam minha jornada
          contínua de aprendizado e aperfeiçoamento. Cada conquista reflete meu
          compromisso em dominar as tecnologias que aplico em cada projeto,
          sempre buscando a excelência.
        </p>
      </div>
      <div className={styles.certificadesContainer}></div>
    </div>
  )
}
