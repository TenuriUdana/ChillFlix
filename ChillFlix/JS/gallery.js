// font change

function smallFont() {
    let font = document.querySelectorAll("p");
    defaultFont();
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "x-small";
    }   
}
  

function mediumFont() {
    let font = document.querySelectorAll("p");
    defaultFont();
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "medium";
    }   
}

function defaultFont() {
    let font = document.querySelectorAll("p");
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "small";
    }   
}

// color picker
function colorPicker() {
    let colorPicker = document.querySelector("#color-picker").value;
    document.body.style.backgroundColor = colorPicker;

}


// color change

function darkMode() {

    let hide = document.querySelectorAll(".hidden-area");

    defaultMode();

    document.body.style.backgroundColor = "black";
    document.querySelector("main").classList.add("topic-dark");
    document.querySelector("footer").classList.add("footer-dark");
    document.querySelector("nav").classList.add("nav-scroll-dark");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.add('hidden-dark');
    }
}

function lightMode() {

    let hide = document.querySelectorAll(".hidden-area");

    defaultMode();

    document.body.style.backgroundColor = "#f6f0f0";
    document.querySelector("main").classList.add("topic-light");
    document.querySelector("footer").classList.add("footer-light");
    document.querySelector("nav").classList.add("nav-scroll-light");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.add('hidden-light');
    }
}

function defaultMode(){

    let hide = document.querySelectorAll(".hidden-area");

    document.body.style.backgroundColor = "#1ee8d9";
    document.querySelector("main").classList.remove("topic-dark","topic-light");
    document.querySelector("footer").classList.remove("footer-dark", "footer-light");
    document.querySelector("nav").classList.remove("nav-scroll-dark", "nav-scroll-light");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.remove('hidden-dark','hidden-light');
    }
}


