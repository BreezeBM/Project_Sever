import { IsBoolean, IsNumber } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class BoardLike {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

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
