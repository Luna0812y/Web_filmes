document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`/movies/search?title=${encodeURIComponent(query)}`);
    const data = await response.json();
    
    console.log('API Response:', data); 

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (data.Response === 'True') {
        data.Search.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
            `;
            resultsContainer.appendChild(movieCard);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
    }
});
