import { CreateMovieInput, Movie } from "../entity/movie.entity";

class MovieService {
  async createMovie(input: CreateMovieInput) {
    return Movie.create(input).save();
  }
}

export default MovieService;
