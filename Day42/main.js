//Menu
let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
};
//Scroll Recveal Animation--
const Animation = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay:"400",
})
Animate.reveal(".nav");