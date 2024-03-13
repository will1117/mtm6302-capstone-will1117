function openMenu() {
    // Will expand the menu based on the designated sizes for each screen size style
    document.getElementById("menu").style.width = "100%";
    // This needs to be fixed/changed, is there an auto version that resizes based on menu size?
    // document.getElementById("main").style.marginLeft = "300px";

    // Old format that only limited menu expansion to desktop size and didn't require css animations:
    // document.getElementById("menu").style.width = "300px";
    // document.getElementById("main").style.marginLeft = "300px";
}

// function to close menu
function closeMenu() {
    document.getElementById("menu").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}

// Code for limiting the selection of future dates (TO BE FIXED)
let today = new Date().toISOString().split("T")[0];
document.getElementById("date-input").setAttribute("max", today);