DROP DATABASE IF EXISTS upcoming_movies_db;
CREATE DATABASE upcoming_movies_db;
USE upcoming_movies_db;

CREATE TABLE department (
  department_id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (department_id)
);

CREATE TABLE roles(
   roles_id INT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary INT NOT NULL,
   department_id INT,
   PRIMARY KEY (roles_id),
   FOREIGN KEY (department_id)
   REFERENCES department(department_id)
   ON DELETE SET NULL
);

CREATE TABLE employees(
   employees_id INT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   PRIMARY KEY (employees_id),
   FOREIGN KEY (role_id)
   REFERENCES roles(roles_id)
   ON DELETE SET NULL
   -- FOREIGN KEY (manager_id)
   -- REFERELL
);

DROP DATABASE IF EXISTS flicker_db;
CREATE DATABASE flicker_db;
USE flicker_db;

CREATE TABLE moviewatcher (
  upcoming_movies_id INT NOT NULL AUTO INCREMENT,
  upcoming_movies VARCHAR(30) NOT NULL,
  watchlist_id INT NOT NULL,
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

}

CREATE TABLE watchlist (
   genre_id INT NOT NULL AUTO INCREMENT,
   movie_id INT NOT NULL,
   movie_name VARCHAR(30) NOT NULL,
   release_date INT NOT NULL,
   PRIMARY KEY (genre_id),
   FOREIGN KEY (genre_id)
   REFERENCES genres(genre_id)
   ON DELETE SET NULL
);

CREATE TABLE upcoming_movies(
   genre_id INT NOT NULL AUTO INCREMENT,
   movie_id INT NOT NULL,
   movie_name VARCHAR(30) NOT NULL,
   release_date INT NOT NULL,
   PRIMARY KEY (genre_id),
   FOREIGN KEY (genre_id)
   REFERENCES genres(genre_id)
);

    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science Fiction" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" }