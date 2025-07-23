import { apiConfig } from "../services/api-config.js";

export async function fetchSchedulesByDay({ date }) {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    console.log(`Fetching schedules for date: ${response}`);
}
