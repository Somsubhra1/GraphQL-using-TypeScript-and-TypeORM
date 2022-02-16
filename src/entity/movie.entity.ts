import { MaxLength, Min, MinLength } from "class-validator";
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
  @MinLength(1)
  @MaxLength(100)
  @Field(() => String)
  title: string;

  @Min(1)
  @Field(() => Int)
  minutes: number;
}

@InputType()
export class GetSingleMovieInput {
  @Min(1)
  @Field(() => Int)
  id: number;
}
