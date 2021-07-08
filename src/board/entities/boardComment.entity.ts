import { IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entites/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class BoardComment extends CoreEntity {
  @Column()
  @IsString()
  writer: string;

  @Column()
  @IsString()
  comment: string;
}
