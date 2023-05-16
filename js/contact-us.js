const INVALID_FORM_CLASS = "text-input-invalid";

const formValues = {
    name: { value: null, validation: () => formValues.name.valid = formValues.name.value.length > 2, valid: false },
    email: { value: null, validation: () => formValues.email.valid = emailIsValid(formValues.email.value), valid: false },
    subject: { value: null, validation: () => formValues.subject.valid = formValues.subject.value.length > 2, valid: false },
    message: { value: null, validation: () => formValues.message.valid = formValues.message.value.length > 2, valid: false },
    phone: { value: null, validation: () => true, valid: true },
}

const submitButton = document.getElementById("submit-enquiry-form");
submitButton.disabled = true;

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const subjectInput = document.getElementById("subject-input");
const messageInput = document.getElementById("message-input");
const phoneInput = document.getElementById("phone-input");

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

phoneInput.addEventListener("input", (e) => {
    formValueChange(e.target.value, "phone")
})

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formValueChange(value, accessor) {
    changeFormValues(value, accessor);
    disableSubmitButton();
    invalidInput(accessor, formValues[accessor].valid);
}

function invalidInput(input, valid) {
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
        case "phone":
            if (valid) {
                phoneInput.classList.remove(INVALID_FORM_CLASS);
            } else {
                phoneInput.classList.add(INVALID_FORM_CLASS);
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
        phone: formValues.phone.value,
    }
}

function resetForm() {
    nameInput.value = "";
    nameInput.classList.remove(INVALID_FORM_CLASS);
    emailInput.value = "";
    emailInput.classList.remove(INVALID_FORM_CLASS);
    subjectInput.value = "";
    subjectInput.classList.remove(INVALID_FORM_CLASS);
    messageInput.value = "";
    messageInput.classList.remove(INVALID_FORM_CLASS);
    phoneInput.value = "";
    phoneInput.classList.remove(INVALID_FORM_CLASS);
    submitButton.textContent = "Submit";
    submitButton.disabled = true;
}

function submitForm() {
    submitButton.textContent = "Submitting..."
    submitButton.disabled = true;
    emailjs.init("VD8B22KlOjrjAzUNW");
    const { name, email, subject, message, phone } = getFormValues(); 
    emailjs.send("service_a41czqj","template_9qrhjvr", {
        email,
        name,
        subject,
        message,
        phone,
    }).then(() => {
        iziToast.success({
            title: 'Success',
            message: 'Enquiry form has been submitted',
            position: "bottomCenter",
            timeout: 3000,
        });
        resetForm();
    }).catch((err) => {
        console.error(err);
        iziToast.error({
            title: 'Error',
            message: 'Enquiry form was not submitted',
            position: "bottomCenter",
            timeout: 3000,
        });
    });
}