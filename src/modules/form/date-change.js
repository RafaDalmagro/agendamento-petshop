import { schedulesDay } from "../schedules/load-schedules.js";

const selectedDate = document.querySelector("#personal-date");

selectedDate.onchange = () => {
    schedulesDay();
};
