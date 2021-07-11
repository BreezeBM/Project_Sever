import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { BoardComment } from './entities/boardComment.entity';
import { BoardLike } from './entities/boardLike.entity';
import { BoardRating } from './entities/boardRating.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board, BoardComment, BoardLike, BoardRating]),
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
