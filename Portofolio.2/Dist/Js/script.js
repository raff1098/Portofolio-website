const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
};