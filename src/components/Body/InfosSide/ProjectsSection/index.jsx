import { Project } from "./Project"
import styles from "./styles.module.scss"

export const ProjectsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className="titleInfos">Projetos</h2>
        <p className="textInfos">
          Combinando as tecnologias que domino, desenvolvi projetos que aplicam
          esses conhecimentos de forma prática e inovadora, trazendo ideias à
          vida.
        </p>
      </div>
      <ul className={styles.listContainer}>
        <li>
          <Project
            name={"My Links"}
            img={"../../../../../src/assets/my_links.jpg"}
            link={"https://igorsaraujo.github.io/Projeto_MyInfos/"}
            description={"Pagina de links pessoais"}
          />
        </li>
        <li>
          <Project
            name={"KenzieHub"}
            img={"../../../../../src/assets/kenziehub.jpg"}
            link={
              "https://react-entrega-kenzie-hub-igor-s-araujo-dicjq0szy.vercel.app"
            }
            description={"Pagina de cadastro de informações"}
          />
        </li>
        <li>
          <Project
            name={"Kenzie Burguer"}
            img={"../../../../../src/assets/kenzieburguer.jpg"}
            link={
              "https://react-entrega-s3-template-hamburgueria-igor-s-araujo.vercel.app"
            }
            description={"Pagina de app de delivery"}
          />
        </li>
        <li>
          <Project
            name={"Portfolio Template"}
            img={"../../../../../src/assets/templateportfolio.jpg"}
            link={
              "https://m3-s1-entrega-portfolio-template-igor-s-araujo.vercel.app"
            }
            description={"Template de Portfolio"}
          />
        </li>
        <li>
          <Project
            name={"Food LandingPage"}
            img={"../../../../../src/assets/foodlandingpage.jpg"}
            link={"https://food-landing-page-six.vercel.app"}
            description={"Landing Page de restaurante"}
          />
        </li>
        <li>
          <Project
            name={"Book Finder"}
            img={"../../../../../src/assets/bookfinder.jpg"}
            link={"https://food-landing-page-six.vercel.app"}
            description={"Pagina de pesquisar livros"}
          />
        </li>
        <li>
          <Project
            name={"Tasks List"}
            img={"../../../../../src/assets/mytasks.jpg"}
            link={
              "https://kenzie-academy-brasil-developers.github.io/m2-lista-de-tarefas-IgorSAraujo/"
            }
            description={
              "Aplicativo de anotar tarefas com nivel de importância"
            }
          />
        </li>
        <li>
          <Project
            name={"Template Landing Page"}
            img={"../../../../../src/assets/genericlanding.jpg"}
            link={
              "https://kenzie-academy-brasil-developers.github.io/m2-lista-de-tarefas-IgorSAraujo/"
            }
            description={
              "Template basico de landing page de site institucional"
            }
          />
        </li>
        <li>
          <Project
            name={"Git Search"}
            img={"../../../../../src/assets/gitsearch.jpg"}
            link={
              "https://kenzie-academy-brasil-developers.github.io/gitSearchBase-IgorSAraujo/"
            }
            description={"Site para procurar usuarios e projetos do github"}
          />
        </li>
      </ul>
    </div>
  )
}
