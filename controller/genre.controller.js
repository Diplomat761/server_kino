import db from '../db.js'

class GenreController {
    async createGenre(req, res) {
        const {id, name} = req.body
        const newGenre = await db.query(`INSERT INTO genres (id, name) values ($1, $2) RETURNING *`, [id, name])
        res.json(newGenre.rows[0])
    }
    async getGenres(req, res) {
        const genres = await db.query('SELECT * FROM genres')
        res.json(genres.rows)
    }
    async getOneGenre(req, res) {
        const id = req.params.id
        const genre = await db.query('SELECT * FROM genres where id = $1', [id])
        res.json(genre.rows[0])
    }
    async updateGenre(req, res) {
        const {id, name} = req.body
        const genre = await db.query('UPDATE genres set name = $1 where id = $2 RETURNING *',
        [name, id])
        res.json(genre.rows[0])
    }
    async deleteGenre(req, res) {
        const id = req.params.id
        const genre = await db.query('DELETE FROM genres where id = $1', [id])
        res.json(genre.rows[0]) 
    }
    
}

export default new GenreController()