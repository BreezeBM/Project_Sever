import { IsDate, IsEmail, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { DislikeFood } from './dislikeFood.entity';
import { LikeFood } from './likeFood.entity';

@Entity()
export class User extends CoreEntity {
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
