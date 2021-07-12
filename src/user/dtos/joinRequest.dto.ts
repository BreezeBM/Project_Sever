import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { DislikeFood } from '../entities/dislikeFood.entity';
import { LikeFood } from '../entities/likeFood.entity';
import { User } from '../entities/user.entity';

export class JoinRequestInput extends User {
  @IsString()
  // @ApiProperty({
  //   example: 'COOKAT',
  //   description: '유저이름',
  // })
  public username: string;

  @IsString()
  // @ApiProperty({
  //   example: 'example@xxxx.com',
  //   description: '이메일',
  // })
  public email: string;

  @IsString()
  // @ApiProperty({
  //   example: 'xxxxxxxxx',
  //   description: '비밀번호',
  // })
  public password: string;

  @IsString()
  // @ApiProperty({
  //   example: '1901-01-01',
  //   description: '생년월일',
  // })
  public birthday: Date;

  @IsString()
  // @ApiProperty({
  //   example: '치킨, 피자, 대창...',
  //   description: '좋아하는 음식',
  // })
  public likeFoods: LikeFood[];

  @IsString()
  // @ApiProperty({
  //   example: '바다내음 가득한 해삼 같은 것',
  //   description: '싫어하는 음식',
  // })
  public dislikeFoods: DislikeFood[];
}

export class JoinRequestOutput extends CoreOutput {
  user?: User;
}
