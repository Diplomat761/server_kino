import db from '../db.js'

class MovieGenresController {
    async addGenre(req, res)  {
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
    }
    async getGenre(req,res) {
        const movieId = req.params.movieId;
        try {
            const result = await db.query(
                'SELECT genres.name FROM genres JOIN movie_genres ON genres.id = movie_genres.genre_id WHERE movie_genres.movie_id = $1',
            [movieId]);
            res.send(result.rows.map(row => row.name));
        } catch (err) {
            console.error(err);
            res.status(500).send('Ошибка при получении жанров к фильму');
        }
    }
}

export default new MovieGenresController