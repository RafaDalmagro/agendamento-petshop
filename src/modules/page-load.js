import { loadSchedules } from "./schedules/load-schedules.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadSchedules();
});
