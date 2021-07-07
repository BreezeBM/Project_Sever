import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DislikeFood } from './dislikeFood.entity';
import { LikeFood } from './likeFood.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  username: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsDate()
  birthday: Date;

  @OneToMany(() => DislikeFood, (dislikeFood) => dislikeFood.user)
  dislikeFoods: DislikeFood[];

  @OneToMany(() => LikeFood, (likeFood) => likeFood.user)
  likeFoods: LikeFood[];
}
