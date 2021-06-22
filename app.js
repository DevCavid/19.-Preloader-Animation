// Need to make a function that gets rid of the preloader

window.addEventListener('load', () => {
    const preload = document.querySelector('.preloader');
    preload.classList.add("preload-finish");
});