import express from 'express';
import genreRouter from './routes/genre.routes.js'
import movieRouter from './routes/movie.routes.js'
import db from './db.js'
//import movie_genresRouter from './routes/movie_genres.routes.js';


const app = express();

app.use(express.json())
app.use('/api', genreRouter)
app.use('/api', movieRouter)
//app.use('/api', movie_genresRouter)
app.post('/movies/:movieId/genres/:genreId', async (req, res) => {
    const movieId = req.params.movieId;
    const genreId = req.params.genreId;
    try {
      const result = await db.query(
        'INSERT INTO movie_genres (movie_id, genre_id) values ($1, $2)',
        [movieId, genreId]);
        res.send(`Жанр ${genreId} добавлен к фильму ${movieId}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Ошибка при добавлении жанра к фильму');
    }
  });

app.listen(4444, (err) => {
    if (err) {
        return console.log('ERRORRRRRRRR');
    }

    console.log('Server OK');
});