import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class DislikeFood {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  nonprefer: string;

  @ManyToOne(() => User, (user) => user.dislikeFoods)
  user: User;
}
