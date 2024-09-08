import { Certificade } from "./Certificade"
import styles from "./styles.module.scss"
import { certificates } from "../../../../database/certificades"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

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
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
          loop: true,
        }}
        modules={[Pagination, Navigation]}
        className={`${styles.certificadesContainer} "mySwiper"`}
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id} className={styles.slideItem}>
            <Certificade
              name={certificate.name}
              link={certificate.link}
              image={certificate.image}
            />
            <h3 className="subTextInfos">{certificate.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
