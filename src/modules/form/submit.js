import { formatePhone } from "./formaters.js";
import { showForm, hideForm } from "./show-form.js";
import { toCapitalizeAll } from "./formaters.js";
import { fetchSchedulesByDay } from "../services/schedules-fetch-by-day.js";
// Componentes
const buttonNewSchedule = document.querySelector("button#new-schedule");
const form = document.querySelector("form");
const closeFormButton = document.querySelector("#close-form");
const scheduleDate = document.querySelector("#personal-date");

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

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        const newSchedule = {
            clientName: clientName.value,
            clientPhone: clientPhone.value,
            scheduleDate: selectedDate.value,
            scheduleTime: selectedTime.value,
            petName: petName.value,
            serviceDescription: serviceDescription.value,
        };

        form.reset();
        hideForm();
    } catch (error) {
        alert("Erro ao agendar o atendimento. Tente novamente.");
        console.log(error);
        return;
    }
};

