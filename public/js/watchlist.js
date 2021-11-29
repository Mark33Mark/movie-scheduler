const addToWatchlist = async (event) => {
    event.preventDefault();

    //Get info from selected movie database
    {{movie_id.title}}
    {{movie_id.description}}
    {{movie_id.releaseDate}}
    {{movie_id.genre}}
  
    //const movieName = document.querySelector('#movieName').value.trim();
    //const genre = document.querySelector('#genreList').value.trim();
    //const releaseDate = document.querySelector('#releaseDate').value.trim();
    //const description = document.querySelector('#movieDesc').value.trim();
  
      const response = await fetch('/api/watchlist', {
        method: 'POST',
        body: JSON.stringify({ movieName, genre, releaseDate, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect to movies page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
  };
  
  const delButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/watchlist/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/watchlist');
      } else {
        alert('Failed to delete from watchlist');
      }
    }
  };

  const emailButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/watchlist`, {
        method: 'GET',
      });
  
      if (response.ok) {
        document.location.replace('/watchlist');
      } else {
        alert('Failed to delete from watchlist');
      }
    }
  };
  
  document
    .querySelector( ".add-to-watchlist" )
    .addEventListener('submit', addToWatchlist);

  document
    .querySelector( ".add-to-watchlist" )
    .addEventListener('click', delButton);

    document
    .querySelector( ".emailLink" )
    .addEventListener('submit', emailButton);