console. log ('linked')

let profileDiv = document.querySelector("#profile")
let searchForm = document.querySelector("#searchTerm")
let userInput = document.querySelector('#userInput')
// let card = document.createElement('div')

searchForm.addEventListener ('submit', 
    function(event) {
    event.preventDefault()
    console.log(`this is the form submit event: ${event}`)
    // let userInput = document.querySelector('#userInput')
    console.log (userInput.value)


// fetch(`https://proxy-itunes-api.glitch.me/lookup?id=334337&entity=song`, {
fetch(`https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&attribute=artistTerm`, {
    method: "GET",

})

.then (function (response){
    return response.json()
})
.then (function (data) {
    for (let track of data.results.slice(1) ) {

        let card = document.createElement('div')
        card.classList.add("card")
        profileDiv.appendChild(card)

        let collectionNameP = document.createElement('p')
        collectionNameP.innerText = track.collectionName
        card.appendChild(collectionNameP)

        let artDirectLink = track.artworkUrl100.toString();
        let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";
        let cover = document.createElement('img')
        cover.src = artConvertedLink
        card.appendChild(cover)

        let artistNameP = document.createElement('p')
        // let firstArtistName = track.artistName.split(',')
        // artistNameP.innerText = firstArtistName[0]
        let firstArtistName = track.artistName
        artistNameP.innerText = firstArtistName
        card.appendChild(artistNameP)

        let trackNameP = document.createElement('p')
        trackNameP.innerText = '\"' + track.trackName + '\"'
        card.appendChild(trackNameP)
        let audioDiv = document.createElement('audio')
        audioDiv.src = track.previewUrl
        audioDiv.controls = 'controls'
        card.appendChild(audioDiv)

    }
})

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

removeAllChildNodes(profileDiv)

})