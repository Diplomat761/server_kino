import { Router } from "express";
import movieController from "../controller/movie.controller.js";
const router = new Router()

router.post('/movie', movieController.createMovie)

export default router