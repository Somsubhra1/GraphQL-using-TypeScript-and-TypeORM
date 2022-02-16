import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateMovieInput,
  DeleteMoviesInput,
  GetMoviesInput,
  GetSingleMovieInput,
  Movie,
  UpdateMovieInput,
} from "../entity/movie.entity";
import MovieService from "../service/movie.service";

@Resolver()
export class MovieResolver {
  constructor(private movieService: MovieService) {
    this.movieService = new MovieService();
  }

  @Mutation(() => Movie)
  createMovie(@Arg("movie") input: CreateMovieInput) {
    return this.movieService.createMovie(input);
  }

  @Query(() => [Movie])
  getMovies(@Arg("filters") input: GetMoviesInput) {
    return this.movieService.getMovies(input);
  }

  @Query(() => Movie, { nullable: true })
  getSingleMovie(@Arg("input") input: GetSingleMovieInput) {
    return this.movieService.getSingleMovie(input);
  }

  @Mutation(() => Movie, { nullable: true })
  updateMovie(@Arg("movie") input: UpdateMovieInput) {
    return this.movieService.updateMovie(input);
  }

  @Mutation(() => Boolean)
  deleteMovie(@Arg("input") input: GetSingleMovieInput) {
    return this.movieService.deleteMovie(input);
  }
    
  @Mutation(() => Boolean)
  deleteMovies(@Arg("input") input: DeleteMoviesInput) {
    return this.movieService.deleteMovies(input);
  }
}
