import { fetchSchedulesByDay } from "../services/schedules-fetch-by-day.js";
import { showSchedules } from "./show-schedules.js";

export async function schedulesDay() {
    const selectedDate = document.querySelector("#personal-date");

    const date = selectedDate.value;
    const schedulesDay = await fetchSchedulesByDay({ date });
	
    showSchedules({ schedulesDay });
}
