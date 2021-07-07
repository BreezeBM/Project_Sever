import { IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class BoardRating {
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
  @IsNumber()
  ratePoint: number;

  @ManyToOne(() => Board, (board) => board.boardRatings)
  board: Board;
}
