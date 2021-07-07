import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeBoard {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  season: number;

  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  recipe: string;

  @Column()
  @IsString()
  time: string;

  @Column()
  @IsString()
  photo: string;

  @Column()
  @IsString()
  recipeVideoUrl: string;

  @Column()
  @IsNumber()
  visitedCount: number;
}
