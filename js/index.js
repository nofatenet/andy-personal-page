const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const DropDownDomContent = document.querySelector(".DropDownContent")
const dropDownDom = document.querySelector("[data-dropDownBtn]");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        DropDownDomContent.classList.remove("show");
    });
});

dropDownDom.addEventListener("click", () => {
    DropDownDomContent.classList.toggle("show");
});
