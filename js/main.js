function togglePassword () {
    const inputPassword = document.getElementById("validationCustomPassword")
    const eyeSVG = document.querySelector(".toggle")
    const type = inputPassword.getAttribute("type")
    if (type === "password") {
        inputPassword.setAttribute("type", "text")
        eyeSVG.className = "fas fa-eye toggle"
        return
    }
    inputPassword.setAttribute("type", "password")
    eyeSVG.className = "fas fa-eye-slash toggle"
}
