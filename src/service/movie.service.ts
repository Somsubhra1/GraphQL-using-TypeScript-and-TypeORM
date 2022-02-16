import { CreateMovieInput, Movie } from "../entity/movie.entity";

class MovieService {
  async createMovie(input: CreateMovieInput) {
    return Movie.create(input).save();
  }

  async getMovies() {
    return Movie.find();
  }
}

export default MovieService;
