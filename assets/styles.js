// Found on https://stackoverflow.com/questions/56118874/changing-background-linear-grading-degree-on-scroll 
// This is the scrolling gradient bg
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight; 

    document.body.style.background = `linear-gradient(to bottom, #42A1DA ${100 - scrollPercent * 100}%, #000C6E)`;
});
