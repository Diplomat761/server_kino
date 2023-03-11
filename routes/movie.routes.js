import { Router } from "express";
import movieController from "../controller/movie.controller.js";
const router = new Router()

router.post('/movie', movieController.createMovie)
router.get('/movie', movieController.getMovies)
router.get('/movie/:id', movieController.getOneMovie)
router.put('/movie', movieController.updateMovie)
router.delete('/movie/:id', movieController.deleteMovie)

export default router