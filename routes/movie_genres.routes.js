import { Router } from "express";
import movie_genresController from "../controller/movie_genres.controller.js";
const router = new Router()

router.post('/movies/:movieId/genres/:genreId', movie_genresController.addingNewGenre)

export default router 