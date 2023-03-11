import { Router } from "express";
import movie_genresController from "../controller/movie_genres.controller.js";
const router = new Router()

router.post('/movies/:movieId/genres/:genreId', movie_genresController.addGenre)
router.get('/movies/:movieId/genres', movie_genresController.getGenre)

export default router 