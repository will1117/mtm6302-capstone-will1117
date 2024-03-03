// When the open menu button is clicked, menu will open to this width
// Find a way to resize menu on different screen sizes, maybe an else if statement?
// if (menu.style.width > "799px") {
//     function openMenu() {
//         document.getElementById("menu").style.width = "300px";
//         document.getElementById("main").style.marginLeft = "300px";
//     }
// }


function openMenu() {
    document.getElementById("menu").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

// function to close menu
function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Code for limiting the selection of future dates (TO BE FIXED)
let today = new Date().toISOString().split("T")[0];
document.getElementById("date-input").setAttribute("max", today);