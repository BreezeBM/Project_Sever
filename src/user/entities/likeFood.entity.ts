import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class LikeFood {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  prefer: string;

  @ManyToOne(() => User, (user) => user.likeFoods)
  user: User;
}
