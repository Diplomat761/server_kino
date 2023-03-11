import db from '../db.js'

class MovieGenresController {
    async addingNewGenre(req, res)  {
        const movieId = req.params.movieId;
        const genreId = req.params.genreId;
        console.log(movieId);
        try {
          const result = await db.query(
            'INSERT INTO movie_genres (movie_id, genre_id) values ($1, $2)',
            [movieId, genreId]);
            res.send(`Жанр ${genreId} добавлен к фильму ${movieId}`);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ошибка при добавлении жанра к фильму');
        }
      }
}

export default new MovieGenresController