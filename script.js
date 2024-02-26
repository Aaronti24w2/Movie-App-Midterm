document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Fully Loaded:', document.readyState)

    const apiKey = 'f20c85ad36e702467f02fdb31ab96c00'
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular'
    const apiUpcoming = 'https://api.themoviedb.org/3/movie/upcoming'
    const apiTopRated = 'https://api.themoviedb.org/3/movie/top_rated'

            async function fetchMovies(api, containerId) {
                try {
                    const response = await fetch(`${api}?api_key=${apiKey}`)
                    const data = await response.json()
                    displayMovies(data.results, containerId)
                } catch (error) {
                    console.error('Error fetching data:', error)
                }
            }
        
       
            function displayMovies(movies, containerId) {
                const moviesListContainer = document.getElementById(containerId)

                console.log('Container ID:', containerId);
                console.log('Movies list container', moviesListContainer)

                movies.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');

                movieElement.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                    <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p>${movie.overview}</p>
                    <p>Release Date: ${movie.release_date}</p>
                    <p>Popularity: ${movie.popularity}</p>
                    <p>Vote Average: ${movie.vote_average}</p>
                </div>`

                    moviesListContainer.appendChild(movieElement)
                })
            }
        

            window.onload = () => {
                fetchMovies(apiUrl, 'popular-list')

                fetchMovies(apiUpcoming, 'upcoming-list')

                fetchMovies(apiTopRated, 'top-rated-list')
            }
        })