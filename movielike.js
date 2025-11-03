// alert("hey!!!");
// document.getElementById('hambtn').onclick = function() {
//     document.getElementById('listlink').classList.toggle('active');

// };


const capalot = document.getElementById("hambtn");
const sleekcapalot = document.getElementById("listlink");
const sleekboy = capalot.querySelector("i");

capalot.addEventListener("click" , () =>{
    sleekcapalot.classList.toggle("active");

    const isactive = sleekcapalot.classList.contains("active");
    sleekboy.setAttribute(
        "class",
        isactive ? "&#9776" : "hambtn"
    );
});

listlink.addEventListener("click", ()=>{
    listlink.classList.remove("active");
})

//SCROLL REVEAL

   const scrollRevealOption =  {
    duration:1000,
    distance:"50px",
};


ScrollReveal().reveal(".header_about h1", {
    scrollRevealOption,
    origin:"top",
    distance:"50px",
    delay:300,
});

ScrollReveal().reveal(".header_about p", {
    scrollRevealOption,
    delay: 600,
    origin:"bottom",
    distance:"50px"
});

ScrollReveal().reveal("button", {
    scrollRevealOption,
    delay:900,
    distance:"50px",

});

ScrollReveal().reveal(".social_links li", {
    scrollRevealOption,
    delay:900,
    interval:350,
    distance:"50px",

});

ScrollReveal().reveal(".webD", {
    scrollRevealOption,
    delay:900,
    interval:350,
    distance:"50px",

});

ScrollReveal().reveal(".expi", {
    scrollRevealOption,
    delay:900,
    interval:400,
    distance:"50px",
    origin:"right",

});

ScrollReveal().reveal("h2", {
    scrollRevealOption,
    delay:700,
    interval:300,
    distance:"50px",
    origin:"right",

});

