function init(){
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  const backgrounds = [
  `radial-gradient(#2B3760, #0B1023)`, 
  `radial-gradient(#4E3022, #161616)`,
  `radial-gradient(#4E4342, #161616)`
];

let current = 0;

slides.forEach((slide, index) => {
    slide.addEventListener("click", function() {
        changeDots(this);
        nextSlide(index);
    }); 
});

function changeDots(dot){
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dot.classList.add("active");
}

function nextSlide(pageNumber){
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model-left");
    const nextRight = nextPage.querySelector(".hero .model-right");
    const currentLeft = currentPage.querySelector(".hero .model-left");
    const currentRight = currentPage.querySelector(".hero .model-right");
    const nextText = nextPage.querySelector(".details");
    const portofolio = document.querySelector(".portfollio");

    const tl = new TimelineMax();

    tl.fromTo(currentLeft, 0.3, {y: '-10%'}, {y: '-100%'})
    .fromTo(currentRight, 0.3, {y: '10%'}, {y: '-100%'}, '-=0.2')

    .to(portofolio, 0.3, {backgroundImage: backgrounds[pageNumber]})

    .fromTo(currentPage, 0.3, {opacity: 1, pointerEvents: "all"},
    {opacity: 0, pointerEvents: "none"}
    )

    .fromTo(nextPage, 0.3, {opacity: 0, pointerEvents: "none"},
    {opacity: 1, pointerEvents: "all"}, "-=0.6"
    )

    .fromTo(nextLeft, 0.3, { y: "-100%"}, {y: "-10%"}, "-=0.6" )
    .fromTo(nextRight, 0.3, { y: "-100%"}, {y: "10%"}, "-=0.6")
    
    .fromTo(nextText, 0.3, {opacity: 0, y:0}, {opacity: 1, y:0})

     // to resume  the hover effect after the animation 

    .set(nextLeft, { clearProps: "all"})
    .set(nextRight, { clearProps: "all"});

    current = pageNumber;

}


}

const hamburger = document.querySelector(".menu");
const hamburgerLine = document.querySelectorAll(".menu line");
const navOpen = document.querySelector(".nav-open");
const contact = document.querySelector(".contact");
const social = document.querySelector(".social");
const logo = document.querySelector(".logo");

const tl = new TimelineMax({ paused: true, reversed: true});

tl.to(navOpen, 0.3, {y: 0})

.fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, "-=0.1")
.fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, "-=0.5")
.fromTo(logo, 0.2, { color: "white"}, { color: "black"}, "-=1")
.fromTo(hamburgerLine, 0.2, { stroke: "white"}, { stroke: "black"}, "-=1");

hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
});

init();