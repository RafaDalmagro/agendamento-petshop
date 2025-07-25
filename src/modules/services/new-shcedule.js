import { apiConfig } from "./api-config.js";
export async function newSchedule({
    id,
    clientName,
    clientPhone,
    scheduleDate,
    scheduleTime,
    petName,
    serviceDescription,
}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                clientName,
                clientPhone,
                scheduleDate,
                scheduleTime,
                petName,
                serviceDescription,
            }),
        });
        console.log("Agendamento enviado com sucesso!");
    } catch (error) {
        alert("Erro ao criar agendamento. Tente novamente.");
        console.log(error);
    }
}
