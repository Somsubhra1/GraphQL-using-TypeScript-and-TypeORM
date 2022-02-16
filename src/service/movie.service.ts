import {
  CreateMovieInput,
  DeleteMoviesInput,
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

  async deleteMovie(input: GetSingleMovieInput) {
    const deleteResult = await Movie.delete(input.id);

    return !!deleteResult.affected;
  }

  async deleteMovies(input: DeleteMoviesInput) {
    const deleteResult = await Movie.delete(input.ids);

    return !!deleteResult.affected;
  }
}

export default MovieService;
