import { IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeComment } from './recipeComment.entity';
import { RecipeIngredient } from './recipeIngredient.entity';

@Entity()
export class RecipeBoard extends CoreEntity {
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

  @OneToMany(() => RecipeComment, (recipeComment) => recipeComment.recipeBoard)
  recipeComments: RecipeComment[];

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipeBoard,
  )
  recipeIngredients: RecipeIngredient[];
}
