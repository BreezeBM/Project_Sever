import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinRequestInput, JoinRequestOutput } from './dtos/joinRequest.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async hello() {
    return true;
  }

  @Post('/join')
  async join(
    @Body() joinRequestInput: JoinRequestInput,
  ): Promise<JoinRequestOutput> {
    return this.userService.join(joinRequestInput);
  }
}
