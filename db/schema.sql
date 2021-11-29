
DROP DATABASE IF EXISTS flicker_db;
CREATE DATABASE flicker_db;
USE flicker_db;

CREATE TABLE genres(
  id INT NOT NULL AUTO_INCREMENT,
  tmdb_genre_id INT NOT NULL,
  genre_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE upcoming_movies(
   id INT NOT NULL AUTO_INCREMENT,
   tmdb_genre_id INT NOT NULL,
   genre_name VARCHAR(30) NOT NULL,
   tmdb_movie_id INT NOT NULL,
   movie_name VARCHAR(30) NOT NULL,
   release_date INT NOT NULL,
   synopsis VARCHAR(1000) NOT NULL,
   poster_path INT,
   backdrop_path INT,
   PRIMARY KEY (id)
   FOREIGN KEY (id)
   REFERENCES genres(id)
);

CREATE TABLE users(
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(30) NOT NULL,
   email VARCHAR(30) NOT NULL,
   watchlist boolean NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE watchlist(
   id INT NOT NULL AUTO_INCREMENT,
   tmdb_movie_id INT NOT NULL,
   notification_period INT NOT NULL,
   PRIMARY KEY (id)
   FOREIGN KEY (id)
   REFERENCES users(id)
   FOREIGN KEY (tmdb_movie_id)
   REFERENCES upcoming_movies(tmdb_movie_id)
);