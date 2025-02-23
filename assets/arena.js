// console.log('Hello,World!')

console.log("Script Loaded");

// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

// Okay, Are.na stuff!
let channelSlug = 'a-deep-dive' // The “slug” is just the end of the URL

// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (data) => {
	// Target some elements in your HTML:
	let channelTitle = document.getElementById('channel-title')
	let channelDescription = document.getElementById('channel-description')
	let channelCount = document.getElementById('channel-count')
	let channelLink = document.getElementById('channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	channelCount.innerHTML = data.length
	channelLink.href = `https://www.are.na/channel/${channelSlug}`
}



// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('channel-blocks')
	console.log(block)

	// Links!
	if (block.class == 'Link') {
		let linkItem =
			`
			<li class="link-block">
				<p><em></em></p>
				<picture>
					<source media="(max-width: 428px)" srcset="${ block.image.thumb.url }">
					<source media="(max-width: 640px)" srcset="${ block.image.large.url }">
					<img src="${ block.image.original.url }">
				</picture>
				<h3>${ block.title }</h3>
				${ block.description_html }
				<p><a href="${ block.source.url }">See the original ↗</a></p>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}

	// // Images!
	// else if (block.class == 'Image') {
	// 	`<li class="Image">
	// 	<img class="image-block" src="links/chimaeras.jpg">
	// 	</li>
	// 	`
	// 	// …up to you!
	// }


// Images!
else if (block.class == 'Image') {

	let imageItem =
		`
		<li class="image-block">
			<button>
				<img src="${block.image.original.url}">
			</button>
				<dialog> 
					<div>
						<p>${block.title}</p>
						<p>${block.description_html}</p>
					</div>
					<img src="${block.image.large.url}">
					<button class="close">× close</button> 
				</dialog>
		</li>
		`

	channelBlocks.insertAdjacentHTML('beforeend', imageItem)

		}

	// Text!
	else if (block.class == 'Text') {
		// …up to you!
		// console.log(block.content_html)
		let textItem = `
			<li class="text-block">
				<p>${block.content_html}</p>
				<p class="small">Created on December 13th</p>
			</li>
		`

		channelBlocks.insertAdjacentHTML('beforeend', textItem)
	}

	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type // Save us some repetition

		// Uploaded videos!
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li class="video-block">
				<button>
					<p><em>Video</em></p>
					<video controls src="${ block.attachment.url }"></video>
				</button>

				<dialog> 
					<div>
						<p>${block.title}</p>
						<p>${block.description_html}</p>
					</div>
					<button class="close">× close</button> 
				</dialog>	

				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		else if (attachment.includes('pdf')) {
			// …up to you!
		}

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			let audioItem =
				`
				<li class="audio-block">
					<p><em></em></p>
					<audio controls src="${ block.attachment.url }"></video>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem)
			// More on audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		}
	}

	// Linked media…
	else if (block.class == 'Media') {
		let embed = block.embed.type

		// Linked video!
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li class="video-block">
					<p><em>Linked Video</em></p>
					${ block.embed.html }
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}

		// Linked audio!
		else if (embed.includes('rich')) {
			// …up to you!
		}
	}
}

// let initInteraction = () => {
// 	let blocks = document.querySelectorAll('.image-block, .link-block, .attachment-block')
// 	blocks.forEach((block) => {
// 		let openButton = block.querySelector('button')
// 		let dialog = block.querySelector('dialog')


		let initInteraction = () => {
			let blocks = document.querySelectorAll('.image-block, .link-block')
			blocks.forEach((block) => {
				let openButton = block.querySelector('button')
				let dialog = block.querySelector('dialog')
				let closeButton = dialog.querySelector('button')
		
				openButton.onclick = () => {
					dialog.showModal()
				}
		
				closeButton.onclick = () => {
					dialog.close()
				}
		
				dialog.onclick = (event) => { // Listen on our `modal` also…
					if (event.target == dialog) { // Only if clicks are to itself (the background).
						dialog.close() // Close it then too.
					}
				}
			})
		}

		// let closeButton = dialog.querySelector('button')

		// openButton.onclick = () => {
		// 	dialog.showModal()
		// }

		// closeButton.onclick = () => {
		// 	dialog.close()
		// }

		// dialog.onclick = (event) => {
		// 	if (event.target == dialog) {
		// 	dialog.close ()
		// 	}

		// if (dialog) {
		// 	let closeButton = dialog.querySelector('button')

		// }

		// if (dialog) {
		// 	let closeButton = dialog.querySelector('button')
		// 	openButton.onclick = () = {
		// 		dialog.showModal()
		// 	}
		// 	closeButton.onclick = () => {
		// 		dialog.close()
		// 	}
		// 	dialog.onclick = () =>  {
		// 		dialog.show()
		// 	}
		//   }

		// }


// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log(data) // Always good to check your response!
		placeChannelInfo(data)
	

			// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
			data.contents.reverse().forEach((block) => {
				// console.log(block) // The data for a single block
				renderBlock(block) // Pass the single block data to the render function
			})
	
			initInteraction()
	

})
