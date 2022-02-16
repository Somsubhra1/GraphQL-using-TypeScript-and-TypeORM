import {
  CreateMovieInput,
  GetMoviesInput,
  GetSingleMovieInput,
  Movie,
} from "../entity/movie.entity";

class MovieService {
  async createMovie(input: CreateMovieInput) {
    return Movie.create(input).save();
  }

  async getMovies(input: GetMoviesInput) {
    return Movie.find({ ...input });
  }

  async getSingleMovie(input: GetSingleMovieInput) {
    return Movie.findOne(input.id);
  }
}

export default MovieService;
