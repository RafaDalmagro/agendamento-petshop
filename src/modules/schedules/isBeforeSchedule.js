const periodItems = document.querySelectorAll(".period-item");

periodItems.forEach((item) => {
    const timeSpan = item.querySelector("#item-time");
	console.log("timeSpan", timeSpan);
    if (!timeSpan) return;
	
    const timeText = timeSpan.textContent.trim(); // Ex: "14:52"

    // Cria um objeto dayjs com a data de hoje + hora do item
    const now = dayjs(); // Hora atual
    const [hour, minute] = timeText.split(":");

    const itemDate = dayjs().hour(hour).minute(minute).second(0);

    if (itemDate.isBefore(now)) {
        item.classList.add("disabled");
    }
});
