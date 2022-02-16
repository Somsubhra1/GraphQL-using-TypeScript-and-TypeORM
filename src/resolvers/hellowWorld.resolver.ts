import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  helloWorld() {
    return "Hello world!";
  }
}
