import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => Int)
  @Column("int", { default: 60 })
  minutes: number;
}

@InputType()
export class CreateMovieInput {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @Field(() => String)
  title: string;

  @IsInt()
  @Min(1)
  @Field(() => Int)
  minutes: number;
}

@InputType()
export class GetMoviesInput {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @Field(() => String, { nullable: true })
  title?: string;

  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  minutes?: number;
}

@InputType()
export class GetSingleMovieInput {
  @IsInt()
  @Min(1)
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateMovieInput {
  @IsInt()
  @Min(1)
  @Field(() => Int)
  id: number;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @Field(() => String, { nullable: true })
  title?: string;

  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  minutes?: number;
}

@InputType()
export class DeleteMoviesInput {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @Min(1, { each: true })
  @Field(() => [Int])
  ids: [number];
}
