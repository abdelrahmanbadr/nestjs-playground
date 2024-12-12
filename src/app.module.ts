import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// TODO: Add this one to the config file
// DB is hosted via https://neon.tech
const DATABASE_CONFIG: PostgresConnectionOptions = {
  url: process.env.DATABASE_URL || "postgresql://user-service_owner:TaSBU3jD7JAK@ep-calm-wave-a5l54v6r.us-east-2.aws.neon.tech/user-service?sslmode=require",
  type: "postgres",
  port: Number(process.env.DATABASE_PORT || 3309),
  // entities: [join(__dirname, "dist/**/*.entity{.ts,.js}")],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Database schema should be auto created on every application launch, true only on development mode,
}

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
      // autoSchemaFile: true, // Code first approach, Schema is generated on the fly in memory
      // utoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Code first approach, automatic schema file path
    }),
    TypeOrmModule.forRoot(DATABASE_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



