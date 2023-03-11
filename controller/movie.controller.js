import db from '../db.js'

class MovieController {
    async createMovie(req, res) {
        const {id, title, release_year} = req.body
        const newMovie = await db.query(`INSERT INTO movies (id, title, release_year) values ($1, $2, $3) RETURNING *`,
        [id, title, release_year])
        res.json(newMovie.rows[0])  
    }
    async getMovies(req, res) {
        const movies = await db.query('SELECT * FROM movies')
        res.json(movies.rows)
    }
    async getOneMovie(req, res) {
        const id = req.params.id
        const movie = await db.query('SELECT * FROM movies where id = $1', [id])
        res.json(movie.rows[0])
    }
    async updateMovie(req,res) {
        const {id, title, release_year} = req.body
        const movie = await db.query(`UPDATE movies set release_year = $3, title = $2 where id = $1 RETURNING *`,
        [id, title, release_year])
        res.json(movie.rows[0]) 
    }
    async deleteMovie(req, res) {
        const id = req.params.id
        const movie = await db.query('DELETE FROM movies where id = $1', [id])
        res.json(movie.rows[0])
    }
}
export default new MovieController()