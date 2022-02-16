import { createConnection } from "typeorm";
import { resolvers } from "./resolvers/";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
  });

  const app = express();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

  await server.start();

  server.applyMiddleware({ app, cors: false });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
  });

  // connect to db

  await createConnection()
    .then(() => console.log("Successfully connected to DB"))
    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
}

bootstrap();
