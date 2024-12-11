import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ defaultValue: false })
  isMarried: boolean;

  @Field({ nullable: true })
  spouseName?: string;
}