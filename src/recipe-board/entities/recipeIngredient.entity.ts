import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { RecipeBoard } from './recipeBoard.entity';

@Entity()
export class RecipeIngredient extends CoreEntity {
  @Column()
  @IsString()
  ingredient: string;

  @Column()
  @IsString()
  volume: string;

  @ManyToOne(() => RecipeBoard, (recipeBoard) => recipeBoard.recipeIngredients)
  recipeBoard: RecipeBoard;
}
