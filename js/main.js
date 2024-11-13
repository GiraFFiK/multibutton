function openMessengerMenu() {
    document.getElementById("messengerMenu").classList.add("show");
    document.querySelector(".floating-button").style.display = "none";
}

function closeMessengerMenu() {
    document.getElementById("messengerMenu").classList.remove("show");
    document.querySelector(".floating-button").style.display = "flex";
}
