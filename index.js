//create click event for slider to expand
const hamburger = document.querySelector(".hamburger_icon");
hamburger.addEventListener("click", function expandFunction() {
    document.getElementById("mySideNav").style.width = "250px";
});

//create click event to close slider on "x"
const xIcon = document.querySelector(".closeBtn");
xIcon.addEventListener("click", function contractSlider(){
    document.getElementById("mySideNav").style.width = "0";
});