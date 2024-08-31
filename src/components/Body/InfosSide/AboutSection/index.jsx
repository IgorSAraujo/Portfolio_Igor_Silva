import styles from "./styles.module.scss"
import { IoIosArrowDroprightCircle } from "react-icons/io"

export const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Sobre Mim</h2>
        <p className="textInfos">
          Seja bem-vindo, me chamo Igor, apaixonado pela tecnologia, e com
          imenso apetite em aprender e desenvolver, aprecio desafios e gosto
          sempre de me colocar em situações novas onde posso demonstrar minha
          habilidade em diferentes cenarios.
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.subtitleContainer}>
          <h3 className="subTitleInfos">Desenvolvedor Front-End & FullStack</h3>
          <p className="textInfos">
            Atualmente estudo e atuo como desenvolvedor Front-End e Fullstack,
            com certificados e formação pela Kenzie Academy brasil, comecei meus
            estudos em 2023, terminando-os em meados de 2024.
          </p>
        </div>
        <div className={styles.listsContainer}>
          <ul className={styles.list}>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}> &nbsp;Cidade:&nbsp;</span>
              <span> Petrolina-PE</span>
            </li>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}>&nbsp;Telefone:&nbsp;</span>
              <span> +55 (87) 99187-9601</span>
            </li>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}>&nbsp;Nivel:&nbsp;</span>
              <span> Junior</span>
            </li>
          </ul>
          <ul className={styles.list}>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}>&nbsp;Idade:&nbsp;</span>
              <span> 22 Anos</span>
            </li>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}>&nbsp;E-Mail:&nbsp;</span>
              <span> igorsaraujo.dev@gmail.com</span>
            </li>
            <li className="textInfos">
              <IoIosArrowDroprightCircle
                className={styles.itenIcon}
                size={16}
              />
              <span className={styles.itemName}> &nbsp;Freelancer:&nbsp;</span>
              <span> Disponivel</span>
            </li>
          </ul>
        </div>
        <p className="textInfos">
          Gosto de trabalhar em projetos completos, tenho interesse em aprender
          e conhecer cada vez mais linguagens de programação, sempre aberto a
          opinioes e disponivel a qualquer tipo de proposta. Sem desafios nao
          existe aprendizado!
        </p>
      </div>
    </div>
  )
}
