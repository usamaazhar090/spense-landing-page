var backdrop = document.querySelector(".backdrop");
var togglebutton = document.querySelector(".togglebutton");
var mobilenav = document.querySelector(".sidebar");
togglebutton.addEventListener("click", function () {
    backdrop.classList.add("open");
    mobilenav.classList.add("open");
    setTimeout(function () {
        backdrop.classList.add("transformation");
        mobilenav.classList.add("transformation");
    }, 100);
});
backdrop.addEventListener("click", closemodal);
function closemodal() {
    backdrop.classList.remove("transformation");
    mobilenav.classList.remove("transformation");
    setTimeout(function () {
    backdrop.classList.remove("open");
    mobilenav.classList.remove("open");
    },200);
}