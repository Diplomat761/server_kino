import db from '../db.js'

class MovieGenresController {
    async addingNewGenre(req, res) {
        const movieId = req.params.movieId;
        const genreId = req.params.genreId;
        const result = await db.query('INSERT INTO movie_genres (movie_id, genre_id) values ($1, $2)',
        [movieId, genreId])
        res.send(`Жанр ${genreId} добавлен к фильму ${movieId}`);
    }
}

export default new MovieGenresController