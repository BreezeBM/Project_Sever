import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { RecipeBoardModule } from './recipe-board/recipeBoard.module';
import { GroceryModule } from './grocery/grocery.module';
import * as Joi from 'joi';
import { Board } from './board/entities/board.entity';
import { BoardComment } from './board/entities/boardComment.entity';
import { BoardLike } from './board/entities/boardLike.entity';
import { Grocery } from './grocery/entities/grocery.entity';
import { RecipeBoard } from './recipe-board/entities/recipeBoard.entity';
import { RecipeComment } from './recipe-board/entities/recipeComment.entity';
import { RecipeIngredient } from './recipe-board/entities/recipeIngredient.entity';
import { User } from './user/entities/user.entity';
import { LikeFood } from './user/entities/likeFood.entity';
import { DislikeFood } from './user/entities/dislikeFood.entity';
import { BoardRating } from './board/entities/boardRating.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'test').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [
        Board,
        BoardComment,
        BoardLike,
        BoardRating,
        Grocery,
        RecipeBoard,
        RecipeComment,
        RecipeIngredient,
        User,
        LikeFood,
        DislikeFood,
      ],
    }),
    UserModule,
    BoardModule,
    RecipeBoardModule,
    GroceryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
