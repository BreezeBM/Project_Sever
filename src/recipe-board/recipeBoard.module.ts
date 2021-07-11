import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeBoard } from './entities/recipeBoard.entity';
import { RecipeComment } from './entities/recipeComment.entity';
import { RecipeIngredient } from './entities/recipeIngredient.entity';
import { RecipeBoardController } from './recipeBoard.controller';
import { RecipeBoardService } from './recipeBoard.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecipeBoard, RecipeComment, RecipeIngredient]),
  ],
  controllers: [RecipeBoardController],
  providers: [RecipeBoardService],
})
export class RecipeBoardModule {}
