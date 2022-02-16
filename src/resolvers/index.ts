import { HelloWorldResolver } from "./hellowWorld.resolver";
import { MovieResolver } from "./movie.resolver";

export const resolvers = [HelloWorldResolver, MovieResolver] as const;
