// const themeToggle = document.querySelector('#theme-toggle');
// const themeToggleIcon = document.querySelector('#theme-toggle > i');
const hero = document.querySelector("#hero");
const scrollDown = document.querySelector("#scroll-down");
const scrollUp = document.querySelector("#scroll-up");
const content = document.querySelector("#content");
const links = document.querySelectorAll("a");

// if (window.innerWidth >= 768) {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         document.body.classList.add('dark-mode');
//         document.body.classList.remove('light-mode');
//     }
// }

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
//     themeToggleIcon.classList.toggle('fa-sun');
//     themeToggleIcon.classList.toggle('fa-moon');
// })

scrollDown.addEventListener("click", () => {
  content.scrollIntoView();
});

scrollUp.addEventListener("click", () => {
  hero.scrollIntoView();
});

window.onscroll = () => {
  if (
    document.body.scrollTop >= hero.offsetHeight ||
    document.documentElement.scrollTop >= hero.offsetHeight
  ) {
    if (window.innerWidth >= 768) {
      scrollUp.style.display = "inline-block";
    }
  } else {
    scrollUp.style.display = "none";
  }
};

for (let link of links) {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
}
