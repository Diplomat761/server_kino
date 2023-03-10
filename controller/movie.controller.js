import db from '../db.js'

class MovieController {
    async createMovie(req, res) {
        const {id, title, year} = req.body
        const newMovie = await db.query(`INSERT INTO movies (id, title, year) values ($1, $2, $3) RETURNING *`,
        [id, title, year])
        res.json(newMovie.rows[0])  
    }
}
export default new MovieController()