export const setLightMode = () => {
  const toggleModeButton = document.querySelector(".toggleTheme")

  toggleModeButton.addEventListener("click", () => {
    const html = document.querySelector("html")
    const togglePage = html.classList.toggle("light-mode")
    localStorage.setItem("@IgorAraujo:Light-Mode", togglePage)
  })
}
export const verifyMode = () => {
  const html = document.querySelector("html")
  const button = document.querySelector(".toggleTheme")

  const lightToggle = JSON.parse(localStorage.getItem("@IgorAraujo:Light-Mode"))

  if (lightToggle) {
    html.classList.add("light-mode")
  }
}
