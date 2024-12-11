#Overview
Nest offers two ways of building GraphQL applications, the code first and the schema first methods.

In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.

In the schema first approach, the source of truth is GraphQL SDL (Schema Definition Language) files. SDL is a language-agnostic way to share schema files between different platforms. Nest automatically generates your TypeScript definitions (using either classes or interfaces) based on the GraphQL schemas to reduce the need to write redundant boilerplate code.


#GraphQL
GraphQL is a query language and runtime for APIs, allowing clients to request precisely the data they need using a defined type system.

#Apollo Server
Apollo Server is a JavaScript/TypeScript library for building GraphQL APIs. It lets you define your schema, connect to data sources, handle real-time subscriptions, and integrate with frameworks like Express or run standalone. It's extensible and developer-friendly with tools like GraphQL Playground.

#GraphQL playground
The playground is an interactive in-browser GraphQL IDE, accessible at the GraphQL server's URL (e.g., http://localhost:3000/graphql) when  basic GraphQL server configured and the server is running.
