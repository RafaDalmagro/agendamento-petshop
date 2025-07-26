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
