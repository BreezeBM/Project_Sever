import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JoinRequestInput, JoinRequestOutput } from './dtos/joinRequest.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}

  async join(joinRequestInput: JoinRequestInput): Promise<JoinRequestOutput> {
    //check new user
    try {
      const exists = await this.users.findOne({
        email: joinRequestInput.email,
      });
      if (exists) {
        //make error
        return { ok: false, error: 'There is user with that email already' };
      }
      await this.users.save(joinRequestInput);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "You can't join" };
    }
    //create new user & hash PW
  }
}
