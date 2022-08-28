const INVALID_FORM_CLASS = "text-input-invalid";

const formValues = {
    name: { value: null, touched: false, validation: () => formValues.name.valid = formValues.name.value.length > 2, valid: false },
    email: { value: null, touched: false, validation: () => formValues.email.valid = emailIsValid(formValues.email.value), valid: false },
    subject: { value: null, touched: false, validation: () => formValues.subject.valid = formValues.subject.value.length > 2, valid: false },
    message: { value: null, touched: false, validation: () => formValues.message.valid = formValues.message.value.length > 2, valid: false },
}

const submitButton = document.getElementById("submit-enquiry-form");
submitButton.disabled = true;

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const subjectInput = document.getElementById("subject-input");
const messageInput = document.getElementById("message-input");

nameInput.addEventListener("input", (e) => {
    formValueChange(e.target.value, "name");
});

emailInput.addEventListener("input", (e) => {
    formValueChange(e.target.value, "email");
});

subjectInput.addEventListener("input", (e) => {
    formValueChange(e.target.value, "subject");
});

messageInput.addEventListener("input", (e) => {
    formValueChange(e.target.value, "message");
});

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function invalidInput(input, valid) {
    console.log("invalidInput", input, valid);
    switch (input) {
        case "name":
            if (valid) {
                nameInput.classList.remove(INVALID_FORM_CLASS);
            } else {
                nameInput.classList.add(INVALID_FORM_CLASS);
            }
            break;
        case "email":
            if (valid) {
                emailInput.classList.remove(INVALID_FORM_CLASS);
            } else {
                emailInput.classList.add(INVALID_FORM_CLASS);
            }
            break;
        case "subject":
            if (valid) {
                subjectInput.classList.remove(INVALID_FORM_CLASS);
            } else {
                subjectInput.classList.add(INVALID_FORM_CLASS);
            }
            break;
        case "message":
            if (valid) {
                messageInput.classList.remove(INVALID_FORM_CLASS);
            } else {
                messageInput.classList.add(INVALID_FORM_CLASS);
            }
            break;
        default: 
            console.warn(`Could not found input ${input}`);
    }
}

function changeFormValues(value, accessor) {
    formValues[accessor].value = value;
    formValues[accessor].valid = true;
    formValues[accessor].validation();
}

function formValueChange(value, accessor) {
    changeFormValues(value, accessor);
    disableSubmitButton();
    invalidInput(accessor, formValues[accessor].valid);
}

function disableSubmitButton() {
    const validValues = Object.values(formValues).map(({ valid }) => valid);
    const valid = validValues.every((val) => val);
    submitButton.disabled = !valid;

}

function getFormValues() {
    return {
        name: formValues.name.value,
        email: formValues.email.value,
        subject: formValues.subject.value,
        message: formValues.message.value,
    }
}

function submitForm() {
    emailjs.init("VD8B22KlOjrjAzUNW");
    const { name, email, subject, message } = getFormValues(); 
    emailjs.send("service_3hprumf","template_9qrhjvr", {
        email,
        name,
        subject,
        message,
    }).then((res) => console.log(res))
}