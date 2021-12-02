const addToWatchlist = async (event) => {
    event.preventDefault();

    //Get info from selected movie database
    
  
      const response = await fetch('/api/watchlist', {
        method: 'POST',
        body: JSON.stringify( {movie_id} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect to movies page
        document.location.reload();
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