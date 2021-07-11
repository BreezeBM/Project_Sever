import { IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BoardComment } from './boardComment.entity';
import { BoardLike } from './boardLike.entity';
import { BoardRating } from './boardRating.entity';

@Entity()
export class Board extends CoreEntity {
  @Column()
  @IsString()
  category: string;

  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  content: string;

  @Column()
  @IsString()
  foodImg: string;

  @Column()
  @IsNumber()
  likedNum: number;

  @Column()
  @IsNumber()
  avgRating: number;

  @OneToMany(() => BoardLike, (boardLike) => boardLike.board)
  boardLikes: BoardLike[];

  @OneToMany(() => BoardRating, (boardRating) => boardRating.board)
  boardRatings: BoardRating[];

  @OneToMany(() => BoardComment, (boardComment) => boardComment.board)
  boardComments: BoardComment[];
}
