// Select all of the elements needed in the script

// const themeToggle = document.querySelector('#theme-toggle');
// const themeToggleIcon = document.querySelector('#theme-toggle > i');
const hero = document.querySelector('#hero');
const scrollDown = document.querySelector('#scroll-down');
const content = document.querySelector('#content');
const links = document.querySelectorAll('a');

// Dark mode or light mode toggle functionality

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.body.classList.add('dark-mode');
//     document.body.classList.remove('light-mode');
// }

// themeToggle.addEventListener('click', function () {
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
//     themeToggleIcon.classList.toggle('fa-sun');
//     themeToggleIcon.classList.toggle('fa-moon');
// })

// Scroll down to content functionality

scrollDown.addEventListener('click', function () {
    content.scrollIntoView();
})

// Add some common attributes to every link element

for (let link of links) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
}
