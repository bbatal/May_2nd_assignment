var header = document.getElementById("header");
var clicks = 0;

function pink(){
    clicks += 1; 
    if (clicks > 5) {
    header.setAttribute("id", "pinkHeader")
}}

function doSomething () {
    if (document.getElementById("checkDisplay").checked){
        document.getElementById("informationToDissapear").style.display="none"
} else {
         document.getElementById("informationToDissapear").style.display="block"
}}

window.addEventListener("scroll", () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        console.log("BART!");
        const scrolled = window.scrollY;
        
        if (Math.ceil(scrolled) === scrollable) {
            alert("You\'ve reached the bottom!");
        }

});