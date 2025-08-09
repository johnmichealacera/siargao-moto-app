import { Controller, Get, Headers } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get('me')
  me(@Headers('x-user-id') userId: string) {
    // MVP: trusting header. Later: verify Firebase token.
    return this.users.findMe(userId);
  }
}


