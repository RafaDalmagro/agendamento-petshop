import dayjs from "dayjs";
import { apiConfig } from "../services/api-config.js";

export async function fetchSchedulesByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();

        const schedulesByDay = data.filter((schedule) =>
            dayjs(schedule.scheduleDate).isSame(dayjs(date), "day")
        );

        return schedulesByDay;
    } catch (error) {
        console.log(error);
    }
}
