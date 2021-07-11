import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { RecipeBoard } from './recipeBoard.entity';

@Entity()
export class RecipeComment extends CoreEntity {
  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  comment: string;

  @ManyToOne(() => RecipeBoard, (recipeBoard) => recipeBoard.recipeComments)
  recipeBoard: RecipeBoard;
}
