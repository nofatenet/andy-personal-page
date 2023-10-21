let darkMode = false;
let darkBtnDom = document.querySelector(".darkBtn");

darkBtnDom.addEventListener("click", () => setDarkMode());

const setDarkMode = () => {

  if (darkMode == false) {
    darkMode = true;

    document.querySelector("body").style.background = "var(--clr-gradacc)";
    document.querySelector("body").style.color = "var(--clr-accent)";

} else if (darkMode == true) {
  darkMode = false;

    document.querySelector("body").style.background = "var(--clr-light)";
    document.querySelector("body").style.color = "var(--clr-dark)";
  };
};