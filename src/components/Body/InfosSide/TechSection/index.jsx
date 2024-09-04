import styles from "./styles.module.scss"
import { Tech } from "./Tech"
import { TiHtml5, TiCss3 } from "react-icons/ti"
import { FaSass, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi"

export const TechSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Tecnologias</h2>
        <p className="textInfos">
          Com experiência em diversas tecnologias de programação, estou
          preparado para desenvolver interfaces dinâmicas, aplicações robustas e
          soluções criativas que se adaptam às necessidades do mercado atual.
        </p>
      </div>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Tech
            icon={TiHtml5}
            techName={"HTML"}
            techLevel={"Avançado"}
            className={"html-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={TiCss3}
            techName={"CSS"}
            techLevel={"Avançado"}
            className={"css-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={FaSass}
            techName={"SASS"}
            techLevel={"Avançado"}
            className={"sass-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={IoLogoJavascript}
            techName={"JavaScript"}
            techLevel={"Avançado"}
            className={"js-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={FaReact}
            techName={"React"}
            techLevel={"Avançado"}
            className={"react-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={BiLogoTypescript}
            techName={"TypeScript"}
            techLevel={"Avançado"}
            className={"typescript-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={BiLogoPostgresql}
            techName={"PSQL"}
            techLevel={"Intermediário"}
            className={"psql-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={FaGitAlt}
            techName={"Git"}
            techLevel={"Avançado"}
            className={"git-tech"}
          />
        </li>
        <li className={styles.listItem}>
          <Tech
            icon={FaNodeJs}
            techName={"NodeJS"}
            techLevel={"Intermediário"}
            className={"nodejs-tech"}
          />
        </li>
      </ul>
    </div>
  )
}
