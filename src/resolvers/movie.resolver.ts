import { Arg, Mutation, Resolver } from "type-graphql";
import { CreateMovieInput, Movie } from "../entity/movie.entity";
import MovieService from "../service/movie.service";

@Resolver()
export class MovieResolver {
  constructor(private movieService: MovieService) {
    this.movieService = new MovieService();
  }

  @Mutation(() => Movie)
  createMovie(@Arg("input") input: CreateMovieInput) {
    return this.movieService.createMovie(input);
  }
}
