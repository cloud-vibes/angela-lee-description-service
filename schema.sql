DROP DATABASE IF EXISTS songs;

CREATE DATABASE songs;

USE songs;

CREATE TABLE song_description (
  id SERIAL PRIMARY KEY,
  unique_id INT,
  song_name VARCHAR(200),
  artist_name VARCHAR(200), 
  licence VARCHAR(200), 
  description_text VARCHAR(4000), 
  released_by VARCHAR(200), 
  release_date DATE, 
  p_line VARCHAR(200), 
  tags VARCHAR(200) 
)