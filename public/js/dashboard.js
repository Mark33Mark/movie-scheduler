const deleteButtonHandler = async (movie_id) => {
    
    console.log(movie_id);

    const response = await fetch(`/api/movie/${movie_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert(`Movie movie_id: ${movie_id} is removed from your watchlist.`);
        document.location.replace('/dashboard');
    } else {
        alert(`Oops, there was a problem deleting movie movie_id: ${movie_id} from your watchlist`);
    }
    };