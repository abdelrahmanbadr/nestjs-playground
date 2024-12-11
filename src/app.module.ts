import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Code first approach, Schema is generated on the fly in memory
      // utoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Code first approach, automatic schema file path
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}