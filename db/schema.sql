
DROP DATABASE IF EXISTS flicker_db;
CREATE DATABASE flicker_db;
USE flicker_db;

CREATE TABLE moviewatcher (
  upcoming_movies VARCHAR(30) NOT NULL,
  users INT NOT NULL,
  watchlist VARCHAR(30) NOT NULL,
  PRIMARY KEY (upcoming_movies_id)
  PRIMARY KEY (watchlist_id)
);

CREATE TABLE genres {
  genre_id INT NOT NULL AUTO INCREMENT,
  genre_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (genre_id)
  FOREIGN KEY (genre_id)
  REFERENCES moviewatcher(upcoming_movies_id)
  FOREIGN KEY (genre_id)
  REFERENCES moviewatcher(watchlist_id)
  genre_id int [pk, increment]
  movie_id int 
  movie_name varchar
  release_date int

}

Table moviewatcher {
  upcoming_movies int [pk, increment]
  users int [pk, increment]
}

Table users {
  user_id int [pk, increment]
  user_name varchar
}

Table genres {
  genre_id int [pk, increment]
  genre_name varchar
}

Table upcoming_movies {
  genre_id int [pk, increment]
  movie_id int 
  movie_name varchar
  release_date int
 }

Table watchlist {
  user_id int [pk, increment]
  genre_id int
  movie_id int 
  movie_name varchar
  release_date int
}


// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: upcoming_movies.genre_id > genres.genre_id  
Ref: users.user_id > watchlist.user_id  
Ref:  genres.genre_id > moviewatcher.upcoming_movies
Ref: users.user_id > moviewatcher.users 

