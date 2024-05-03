const div = document.querySelector("div");
const img = document.querySelector("img");

let theme = 1;

div.addEventListener("click", () => {
    document.querySelector("html").classList.toggle("dark-mode");

    if(theme) {
        theme = 0;
        img.src = "./img/moon.png";
        img.style.translate = "40px";
        img.classList.remove("sol");
        img.classList.add("lua");
    } else {
        theme = 1;
        img.src = "./img/sun.png";
        img.style.translate = "0";
        img.classList.remove("lua");
        img.classList.add("sol");
    }
}); 
