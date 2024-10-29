import styles from "./styles.module.scss"
import emailjs from "emailjs-com"
import { useRef } from "react"

export const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_gap60y5",
        "template_2gyantv",
        form.current,
        "kEwyknF0TJ-npQHth"
      )
      .then(
        (result) => {
          console.log(result.text)
          alert("Email enviado com sucesso!")
        },
        (error) => {
          console.log(error)
          alert("Erro ao enviar o e-mail.")
        }
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Seu nome" required />
      <input type="email" name="email" placeholder="Seu e-mail" required />
      <input type="tel" name="phone" placeholder="Seu telefone" />
      <textarea name="message" placeholder="Sua mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  )
}
