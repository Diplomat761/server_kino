import express from 'express';
import genreRouter from './routes/genre.routes.js'
import movieRouter from './routes/movie.routes.js'


const app = express();

app.use(express.json())
app.use('/api', genreRouter)
app.use('/api', movieRouter)

app.listen(4444, (err) => {
    if (err) {
        return console.log('ERRORRRRRRRR');
    }

    console.log('Server OK');
});