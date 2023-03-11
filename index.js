import express from 'express';
import genreRouter from './routes/genre.routes.js'
import movieRouter from './routes/movie.routes.js'
import movie_genresRouter from './routes/movie_genres.routes.js';



const app = express();

app.use(express.json())
app.use('/api', genreRouter)
app.use('/api', movieRouter)
app.use('/api', movie_genresRouter)


app.listen(4444, (err) => {
    if (err) {
        return console.log('ERRORRRRRRRR');
    }

    console.log('Server OK');
});