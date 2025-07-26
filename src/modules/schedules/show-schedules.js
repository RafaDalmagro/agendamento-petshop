const listMorning = document.querySelector("#list-morning");
const listAfternoon = document.querySelector("#list-afternoon");
const listNight = document.querySelector("#list-night");

export function showSchedules({ schedulesDay }) {
    try {
        // Limpa as listas antes de adicionar novos agendamentos
        listMorning.innerHTML = "";
        listAfternoon.innerHTML = "";
        listNight.innerHTML = "";

        schedulesDay.forEach((schedule) => {
            const scheduleItem = document.createElement("li");
            const itemTime = document.createElement("span");
            const itemClient = document.createElement("span");
            const petName = document.createElement("span");
            const tutorName = document.createElement("span");
            const itemService = document.createElement("span");
            const removeButton = document.createElement("a");

            scheduleItem.classList.add("period-item");
            scheduleItem.setAttribute("data-id", schedule.id);

            itemTime.classList.add("item-time");
            itemTime.setAttribute("id", "item-time");

            itemClient.classList.add("item-client");
            itemClient.setAttribute("id", "client-pet-name");

            petName.setAttribute("id", "span-pet-name");

            tutorName.setAttribute("id", "tutor-name");

            itemService.classList.add("item-service");
            itemService.setAttribute("id", "item-service");

            removeButton.classList.add("item-remove");
            removeButton.setAttribute("id", "remove");

            // Adiciona os dados do agendamento aos elementos

            const formatedPetName = schedule.petName + " / ";
            petName.textContent = formatedPetName;
            itemTime.textContent = schedule.scheduleTime;
            tutorName.textContent = schedule.clientName;
            itemService.textContent = schedule.serviceDescription;

            removeButton.textContent = "Remover agendamento";

            // Adiciona os elementos ao item de agendamento
            itemClient.appendChild(petName);
            itemClient.appendChild(tutorName);
            scheduleItem.appendChild(itemTime);
            scheduleItem.appendChild(itemClient);
            scheduleItem.appendChild(itemService);
            scheduleItem.appendChild(removeButton);

            if (
                schedule.scheduleTime >= "09:00" &&
                schedule.scheduleTime < "12:00"
            ) {
                listMorning.appendChild(scheduleItem);
            } else if (
                schedule.scheduleTime >= "13:00" &&
                schedule.scheduleTime < "18:00"
            ) {
                listAfternoon.appendChild(scheduleItem);
            } else if (
                schedule.scheduleTime >= "19:00" &&
                schedule.scheduleTime < "21:00"
            ) {
                listNight.appendChild(scheduleItem);
            }
        });
    } catch (error) {
        alert("Erro ao carregar agendamentos. Tente novamente.");
        console.log(error);
    }
}
