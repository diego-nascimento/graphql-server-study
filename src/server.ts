import "reflect-metadata";

import { buildSchema } from 'type-graphql'
import { AppoitmentResolver } from './resolvers/Appointment-Resolver'
import path from 'path'
import { ApolloServer } from "apollo-server";

async function bootstrap(){
  const schema = await buildSchema({
    resolvers: [AppoitmentResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })
  const server = new ApolloServer({schema})
  server.listen().then(({url}) => console.log(url))
}

bootstrap()