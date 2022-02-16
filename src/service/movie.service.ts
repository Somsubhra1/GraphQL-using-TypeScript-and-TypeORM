import {
  CreateMovieInput,
  GetMoviesInput,
  GetSingleMovieInput,
  Movie,
  UpdateMovieInput,
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

  async updateMovie(input: UpdateMovieInput) {
    await Movie.update(input.id, input);

    return this.getSingleMovie({ id: input.id });
  }
}

export default MovieService;
