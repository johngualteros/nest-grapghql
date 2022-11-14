/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength, IsInt } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(400)
  @Field()
  content: string;

  @IsInt()
  @Field()
  authorId: number;
}
