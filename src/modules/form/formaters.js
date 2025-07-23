import dayjs from "dayjs";
import { schedulesDay } from "../schedules/load-schedules";
// COMPONENTS

const selectedDate = document.querySelector("#date");
const selectedTime = document.querySelector("#time");
const personalDate = document.querySelector("#personal-date");
//
const todayDate = dayjs(new Date()).format("YYYY-MM-DD");
const todayHour = dayjs(new Date()).format("HH:mm");
// Formata os inputs data e time
personalDate.value = todayDate;
personalDate.min = todayDate;

personalDate.onchange = () => {
    console.log("Data alterada para:", personalDate.value);
    
    schedulesDay();
};

selectedTime.value = todayHour;
selectedTime.min = "09:00";
selectedTime.max = "21:00";

selectedDate.value = todayDate;
selectedDate.min = todayDate;

export function formatePhone(phone) {
    if (phone.length > 0) {
        phone = "(" + phone;
    }
    if (phone.length > 3) {
        phone = phone.slice(0, 3) + ") " + phone.slice(3);
    }
    if (phone.length > 6) {
        phone = phone.slice(0, 6) + " " + phone.slice(6);
    }
    if (phone.length > 11) {
        phone = phone.slice(0, 11) + "-" + phone.slice(11, 15);
    }

    return phone.slice(0, 16); // Limita o tamanho total
}

export function toCapitalizeAll(string) {
    return string
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
