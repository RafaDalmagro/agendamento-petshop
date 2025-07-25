import { apiConfig } from "./api-config.js";
export async function cancelSchedule({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        });
        console.log("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.error("Erro ao cancelar agendamento:", error);
    }
}
