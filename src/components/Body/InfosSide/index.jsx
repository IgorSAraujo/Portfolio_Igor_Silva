import styles from "./styles.module.scss"
import { AboutSection } from "./AboutSection"
import { ContactsSection } from "./ContactSection"
import { GraduationSection } from "./GraduationSection"
import { HomeSection } from "./HomeSection"
import { ProjectsSection } from "./ProjectsSection"
import { TechSection } from "./TechSection"

export const InfosSide = () => {
  return (
    <div className={styles.container}>
      <HomeSection id="home" />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <GraduationSection />
      <ContactsSection />
    </div>
  )
}
