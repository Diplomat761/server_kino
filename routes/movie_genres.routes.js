import { Router } from "express";
import movie_genresController from "../controller/movie_genres.controller.js";
const router = new Router()

router.post('/movies/:movieId/genres/:genreId', movie_genresController.addMovieGenres)
router.get('/movies/:movieId/genres', movie_genresController.getMovieGenres)
router.delete('/movies/:movieId/genres/:genreId', movie_genresController.deleteMovieGenres)

export default router 