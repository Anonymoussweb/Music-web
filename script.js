var menu = document.querySelector("#menu");
var side = document.querySelector("#side");

var tog = true;
menu.addEventListener("click", () => {
 
    if(tog){
        side.style.left = `0%`;
        tog = false;
    }
    else{
        side.style.left = `-100%`;
        tog = true;
        console.log("hello");
    }
    x = window.matchMedia("(min-width: 1121px)");
    x.addEventListener("change", function() {
        side.style.left = `0%`;
      });
});

