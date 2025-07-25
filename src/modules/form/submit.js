import { formatePhone } from "./formaters.js";
import { showForm, hideForm } from "./show-form.js";
import { toCapitalizeAll } from "./formaters.js";
import { newSchedule } from "../services/new-shcedule.js";
import { schedulesDay } from "../schedules/load-schedules.js";

// Componentes
const buttonNewSchedule = document.querySelector("button#new-schedule");
const form = document.querySelector("form");
const closeFormButton = document.querySelector("#close-form");

// Inputs do formulário
const clientName = document.querySelector("#client-name");
const clientPhone = document.querySelector("#client-phone");
const petName = document.querySelector("#pet-name");
const serviceDescription = document.querySelector("#service");
const selectedTime = document.querySelector("#time");
const selectedDate = document.querySelector("#date");

buttonNewSchedule.addEventListener("click", (event) => {
    event.preventDefault();
    showForm();
});
closeFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    hideForm();
});

// Formata os inputs de texto
clientName.oninput = () => {
    const formatedName = clientName.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    clientName.value = toCapitalizeAll(formatedName);
};
petName.oninput = () => {
    const formatedPetName = petName.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    petName.value = toCapitalizeAll(formatedPetName);
};
clientPhone.oninput = () => {
    let value = clientPhone.value.replace(/\D/g, "");
    clientPhone.value = formatePhone(value);
};
serviceDescription.oninput = () => {
    serviceDescription.value = serviceDescription.value.replace(
        /[^a-zA-ZÀ-ÿ\s.,-]/g,
        ""
    );
};

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const id = new Date().getTime();
        const clientNameValue = clientName.value.trim();
        const clientPhoneValue = clientPhone.value.replace(/\D/g, "").trim();
        const petNameValue = petName.value.trim();
        const serviceDescriptionValue = serviceDescription.value.trim();

        newSchedule({
            id,
            clientName: clientNameValue,
            clientPhone: clientPhoneValue,
            scheduleDate: selectedDate.value,
            scheduleTime: selectedTime.value,
            petName: petNameValue,
            serviceDescription: serviceDescriptionValue,
        });
        const formulario = {
            id,
            clientName: clientNameValue,
            clientPhone: clientPhoneValue,
            scheduleDate: selectedDate.value,
            scheduleTime: selectedTime.value,
            petName: petNameValue,
            serviceDescription: serviceDescriptionValue,
        };
        console.log("Formulário enviado:", formulario);
        hideForm();
        form.reset();
        await schedulesDay();
    } catch (error) {
        alert("Erro ao agendar o atendimento. Tente novamente.");
        console.log(error);
        return;
    }
};
