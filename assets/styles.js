// Found on https://stackoverflow.com/questions/56118874/changing-background-linear-grading-degree-on-scroll 
// This is the scrolling gradient bg
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight; 

    document.body.style.background = `linear-gradient(to bottom, #000C6E ${100 - scrollPercent * 100}%, #00000)`;
});

let channelBlocks = document.querySelector('#channel-blocks')
let showVideoButton = document.querySelector('#show-video-button')
let showImageButton = document.querySelector('#show-image-button')
let showAudioButton = document.querySelector('#show-audio-button')
let showPdfButton = document.querySelector('#show-pdf-button')
let showAllButton = document.querySelector('#show-all-button')

showVideoButton.onclick = () => {
    channelBlocks.classList.add('show-video')
}

showImageButton.onclick = () => {
    channelBlocks.classList.add('show-image')
}

showAudioButton.onclick = () => {
    channelBlocks.classList.add('show-audio')
}

showAudioButton.onclick = () => {
    channelBlocks.classList.add('show-pdf')
}

showAllButton.onclick = () => {
    channelBlocks.classList.remove('show-video')
    channelBlocks.classList.remove('show-image')
    channelBlocks.classList.remove('show-audio')
    channelBlocks.classList.remove('show-pdf')
    
}

