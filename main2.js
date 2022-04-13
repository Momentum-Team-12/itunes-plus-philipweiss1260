console. log ('linked')

const profileDiv = document.querySelector("#profile")

const searchForm = document.querySelector("#search")

searchForm.addEventListener ('submit', function(event) {
    event.preventDefault()

    let userInput = document.querySelector('#userInput')
    console.log (userInput.value)
}

fetch(`https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&media=music`, {
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
