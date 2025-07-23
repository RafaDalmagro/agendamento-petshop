const form = document.querySelector("form");
const body = document.querySelector("body");

export function hideForm() {
    form.classList.add("hide");
    body.classList.remove("blur-overlay");
}

export function showForm() {
    form.classList.remove("hide");
    body.classList.add("blur-overlay");
}


// clientName.oninput = () => {
//     const formatedName = clientName.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
//     clientName.value = formatedName;
// };
// clientPhone.oninput = () => {
//     clientPhone.value = formatePhone(clientPhone.value);
// };
// petName.oninput = () => {
//     petName.value = petName.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
// };