// fixed navbar on scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
        navbar.classList.add("fixed", "top-0", "left-0", "right-0", "bg-white", "w-full","px-[10%]");
        navbar.classList.remove("w-[90%]", "md:w-[85%]", "lg:w-[80%]")
    } else {
        navbar.classList.remove("fixed", "top-0", "left-0", "right-0", "bg-white", "w-full","px-[10%]");
        navbar.classList.add("w-[90%]", "md:w-[85%]", "lg:w-[80%]")
    }
});

//nav links toggle
const navLinks = document.querySelector(".nav__links")
const navLinksToggle = document.querySelector(".nav__toggle")

navLinksToggle.addEventListener("click", () =>{
    navLinks.classList.toggle("hidden")
})
