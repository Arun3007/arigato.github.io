const scriptURL = 'https://script.google.com/macros/s/AKfycbyK4b-uTkTRGCT3h9ep74kW5UrJ-dJiBx3i95mYPGGbLFxp4jQYffL2QX-A0F3JkGoZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})