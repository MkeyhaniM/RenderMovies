let searchOnlist0fMovies = "https://api.themoviedb.org/3/search/movie?api_key=068aadba7272a85faf6c732c8f078f56&query=''"
let showMovie = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=068aadba7272a85faf6c732c8f078f56'
let pathIMG = 'https://image.tmdb.org/t/p/w1280'


async function getApiMovies(e) {
    let first = await fetch(e)
    let done = await first.json()
    makePosters(done.results)
}

getApiMovies(showMovie)


function makePosters(res) {
    let all = document.getElementById("all")

    res.forEach(e => {
        let myele = document.createElement("div")
        myele.classList.add("movies")
        myele.innerHTML = `
                    <img src="${pathIMG + e.poster_path}" alt="">
                    <div class="perh2">
                        <h2>${e.title}</h2>
                        <span class="${SeeAverage(e.vote_average)}">${e.vote_average}</span>
                    </div>
                    <div class="perover">
                        <p class="overview">
                            ${e.overview}
                        </p>
                    </div>
                 `;
        all.appendChild(myele)
    })
}

function SeeAverage(vote_average) {
    if (vote_average > 7.5) {
        return "green"
    } else if (vote_average > 5) {
        return "yellow"
    } else if (vote_average < 4.9) {
        return "red"
    }
}

let form = document.getElementById("form")
let search = document.getElementById("search")

form.addEventListener("submit", e => {
    e.preventDefault()
    let valueProperty = search.value;
    if (valueProperty && valueProperty != "") {
        console.log(valueProperty)
        let text = `https://api.themoviedb.org/3/search/movie?api_key=068aadba7272a85faf6c732c8f078f56&query='${valueProperty}' `
        getApiMovies(text)
    } else {
        alert("please refresh the page")
    }
})