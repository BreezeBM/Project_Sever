import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class LikeFood extends CoreEntity {
  @Column()
  @IsString()
  prefer: string;

  @ManyToOne(() => User, (user) => user.likeFoods)
  user: User;
}
