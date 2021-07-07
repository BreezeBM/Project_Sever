import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeComment {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  content: string;
}
