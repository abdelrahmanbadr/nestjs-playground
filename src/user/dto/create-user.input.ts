import { Field, InputType } from "@nestjs/graphql";

@InputType() //Represntation of the input/argument
export class CreateUserInput {
    @Field()
    name: string;
  
    @Field()
    // @IsNotEmpty()
    // @IsEmail //validators to be added
    email: string;
  
    @Field({ defaultValue: false })
    isMarried: boolean;
  
    @Field({ nullable: true })
    spouseName?: string;
}