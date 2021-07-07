import { Module } from '@nestjs/common';
import { RecipeBoardController } from './recipeBoard.controller';
import { RecipeBoardService } from './recipeBoard.service';

@Module({
  controllers: [RecipeBoardController],
  providers: [RecipeBoardService],
})
export class RecipeBoardModule {}
