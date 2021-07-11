import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Grocery extends CoreEntity {
  @Column()
  @IsString()
  name: string;
}
