console. log ('linked')

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

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

removeAllChildNodes(profileDiv)

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

        let cover = document.createElement('img')
        cover.src = track.artworkUrl100
        card.appendChild(cover)

        let artistNameP = document.createElement('p')
        let firstArtistName = track.artistName.split(',')
        artistNameP.innerText = firstArtistName[0]
        card.appendChild(artistNameP)

        let trackNameP = document.createElement('p')
        trackNameP.innerText = track.trackName
        card.appendChild(trackNameP)
    }
})
})