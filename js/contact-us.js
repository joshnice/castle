const formValues = {
    name: { value: null, touched: false, validation: () => formValues.name.valid = formValues.name.value.length > 2, valid: false },
    email: { value: null, touched: false, validation: () => formValues.email.valid = emailIsValid(formValues.email.value), valid: false },
    subject: { value: null, touched: false, validation: () => formValues.subject.valid = formValues.name.value.length > 2, valid: false },
    message: { value: null, touched: false, validation: () => formValues.message.valid = formValues.name.value.length > 2, valid: false },
}

const submitButton = document.getElementById("submit-enquiry-form");
submitButton.disabled = true;
console.log("submitButton", submitButton);

document.getElementById("name-input").addEventListener("input", (e) => {
    formValueChange(e.target.value, "name");
});

document.getElementById("email-input").addEventListener("input", (e) => {
    formValueChange(e.target.value, "email");
});

document.getElementById("subject-input").addEventListener("input", (e) => {
    formValueChange(e.target.value, "subject");
});

document.getElementById("message-input").addEventListener("input", (e) => {
    formValueChange(e.target.value, "message");
});

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}    

function formValueChange(value, accessor) {
    formValues[accessor].value = value;
    formValues[accessor].valid = true;
    formValues[accessor].validation();
    disableSubmitButton();
}

function disableSubmitButton() {
    const validValues = Object.values(formValues).map(({ valid }) => valid);
    const valid = validValues.every((val) => val);
    submitButton.disabled = !valid;

}

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