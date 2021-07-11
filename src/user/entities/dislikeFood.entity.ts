import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class DislikeFood extends CoreEntity {
  @Column()
  @IsString()
  nonprefer: string;

  @ManyToOne(() => User, (user) => user.dislikeFoods)
  user: User;
}
