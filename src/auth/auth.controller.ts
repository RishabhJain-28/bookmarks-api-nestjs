import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'i am signup';
  }

  @Post('signin')
  signin() {
    return 'i am signin';
  }
}
