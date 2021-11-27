const addToWatchlist = async (event) => {
    event.preventDefault();
  
    const movieName = document.querySelector('#movieName').value.trim();
    const genre = document.querySelector('#genreList').value.trim();
    const releaseDate = document.querySelector('#releaseDate').value.trim();
    const description = document.querySelector('#movieDesc').value.trim();
  
    if (movieName && genre && releaseDate && description) {
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
    }
  };
  
  const signupFormHandler = async ( event ) => {
    
    event.preventDefault();
  
    const username = document.getElementById("name-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();
  
      if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector( ".add-to-watchlist" )
    .addEventListener('submit', addToWatchlist);