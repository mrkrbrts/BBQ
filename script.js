let emailCollectorForm = document.getElementById("Email-Collector") 
let emailCollectorButton = document.getElementById("email-collector-button")
let alternateContent = document.getElementById("alternate-title")


emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    alternateContent.innerHTML = `Congratulations, ${userFirstName}, thanks for registering!`;
})