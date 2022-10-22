/* http://www.omdbapi.com/?apikey=dee75f41& */
/* http://img.omdbapi.com/?apikey=dee75f41& */
/* http://www.omdbapi.com/?i=tt3896198&apikey=dee75f41 */

async function main(search) {
    const movie = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=dee75f41`)
    const movieData = await movie.json()
    const movieListEl = document.querySelector('.movie-list')
    console.log(movieData)

    movieListEl.innerHTML = 
    Object.keys(movieData).map(
        (movie) => `<div class="movie-results">
                        <img src="" alt="" class="movie-poster">
                        <h3>${movie.Title}</h3>
                        <p>Year</p>
                    </div>`
        )
    .join("")
}

main()