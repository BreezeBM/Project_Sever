import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DislikeFood } from './entities/dislikeFood.entity';
import { LikeFood } from './entities/likeFood.entity';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, LikeFood, DislikeFood])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
