// Found on https://stackoverflow.com/questions/56118874/changing-background-linear-grading-degree-on-scroll 
// This is the scrolling gradient bg
// It works because I give the gradient a scroll height and connect the colors in percentage to the entire scroll :)
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
let showLinkButton = document.querySelector('#show-link-button')
let showAllButton = document.querySelector('#show-all-button')

showVideoButton.onclick = () => {
    channelBlocks.classList.add('show-video')

    channelBlocks.classList.remove('show-image')
    channelBlocks.classList.remove('show-audio')
    channelBlocks.classList.remove('show-pdf')
    channelBlocks.classList.remove('show-link')
    channelBlocks.classList.remove('show-text')
}

showImageButton.onclick = () => {
    channelBlocks.classList.add('show-image')

    channelBlocks.classList.remove('show-video')
    channelBlocks.classList.remove('show-audio')
    channelBlocks.classList.remove('show-pdf')
    channelBlocks.classList.remove('show-link')
    channelBlocks.classList.remove('show-text')
}

showAudioButton.onclick = () => {
    channelBlocks.classList.add('show-audio')

    channelBlocks.classList.remove('show-video')
    channelBlocks.classList.remove('show-image')
    channelBlocks.classList.remove('show-pdf')
    channelBlocks.classList.remove('show-link')
    channelBlocks.classList.remove('show-text')
}

showLinkButton.onclick = () => {
    // channelBlocks.classList.add('show-pdf')
    channelBlocks.classList.add('show-link')
    channelBlocks.classList.add('show-text')

    channelBlocks.classList.remove('show-video')
    channelBlocks.classList.remove('show-image')
    channelBlocks.classList.remove('show-audio')
}

// showPdfButton.onclick = () => {
//     channelBlocks.classList.add('show-pdf')
//     channelBlocks.classList.add('show-link')

//     channelBlocks.classList.remove('show-video')
//     channelBlocks.classList.remove('show-image')
//     channelBlocks.classList.remove('show-audio')
// }

showAllButton.onclick = () => {
    channelBlocks.classList.add('show-video')
    channelBlocks.classList.add('show-image')
    channelBlocks.classList.add('show-audio')
    channelBlocks.classList.add('show-pdf')
    channelBlocks.classList.add('show-link')
    channelBlocks.classList.add('show-text') 
}

