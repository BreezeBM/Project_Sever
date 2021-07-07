import { IsNumber, isString, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BoardLike } from './boardLike.entity';
import { BoardRating } from './boardRating.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

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
  photo: string;

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
}
