import { IsBoolean, IsNumber } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class BoardLike extends CoreEntity {
  @Column()
  @IsNumber()
  board_id: number;

  @Column()
  @IsNumber()
  user_id: number;

  @Column()
  @IsBoolean()
  isLiked: boolean;

  @ManyToOne(() => Board, (board) => board.boardLikes)
  board: Board;
}
