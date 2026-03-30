function toggleMode() {
    document.body.classList.toggle("light-mode");
}

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("mouseover", function () {
    profilePic.src = "hover.jpg";
});

profilePic.addEventListener("mouseout", function () {
    profilePic.src = "ej.jpg";
});
