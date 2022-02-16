import {
  CreateMovieInput,
  GetSingleMovieInput,
  Movie,
} from "../entity/movie.entity";

class MovieService {
  async createMovie(input: CreateMovieInput) {
    return Movie.create(input).save();
  }

  async getMovies() {
    return Movie.find();
  }

  async getSingleMovie(input: GetSingleMovieInput) {
    return Movie.findOne(input.id);
  }
}

export default MovieService;
