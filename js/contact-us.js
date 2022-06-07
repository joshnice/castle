var formValues = {
    name: null,
    email: null,
    subject: null,
    message: null,
}

document.getElementById("name-input").addEventListener("change", (e) => {
    formValues.name = e.target.value;
});

document.getElementById("email-input").addEventListener("change", (e) => {
    formValues.email = e.target.value;
});

document.getElementById("subject-input").addEventListener("change", (e) => {
    formValues.subject = e.target.value;
});

document.getElementById("message-input").addEventListener("change", (e) => {
    formValues.message = e.target.value;
});

function submitForm() {
    emailjs.init("VD8B22KlOjrjAzUNW");
    const { name, email, subject, message } = formValues
    emailjs.send("service_3hprumf","template_9qrhjvr", {
        email,
        name,
        subject,
        message,
    }).then((res) => console.log(res))
}