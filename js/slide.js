let slideIndex = 1;
let play = false;

let ImageSource = Array.from(document.querySelectorAll(".slideImage"));
//console.log("Source-Array: ", ImageSource);

let playDom = document.querySelector(".player");
let slides = Array.from(document.querySelectorAll(".slides"));
//console.log("Amount of Images: ", slides.length);

playDom.addEventListener("click", () => setplay());

const LetsGo = () => {
  interval = setInterval(() => {
    changeSlide(1);
  }, 2000);
}

const setplay = () => {

  if (play == false) {
    play = true;
    changeSlide(+1);
    LetsGo();
    playDom.innerHTML = "❚❚";
} else if (play == true) {
    play = false;
    clearInterval(interval);
    playDom.innerHTML = "▶";
  };
};

const showSlides = (n) => {
  if (n > slides.length) {
    slideIndex = 1
  };
  if (n < 1) {
    slideIndex = slides.length
  };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
};

const changeSlide = (n) => {
  showSlides(slideIndex += n);
};
const currentSlide = (n) => {
  showSlides(slideIndex = n);
};

showSlides(slideIndex);
