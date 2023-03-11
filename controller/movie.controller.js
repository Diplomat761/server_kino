import db from '../db.js'

class MovieController {
    async createMovie(req, res) {
        const {id, title, release_year} = req.body
        const newMovie = await db.query(`INSERT INTO movies (id, title, release_year) values ($1, $2, $3) RETURNING *`,
        [id, title, release_year])
        res.json(newMovie.rows[0])  
    }
}
export default new MovieController()