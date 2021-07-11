import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class BoardComment extends CoreEntity {
  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  comment: string;

  @ManyToOne(() => Board, (board) => board.boardComments)
  board: Board;
}
