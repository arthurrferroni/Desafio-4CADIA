import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { DbModule } from 'src/db/db.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [UserService, AuthService],
  imports: [DbModule, PassportModule],
  controllers: [UserController, AuthController]
})
export class UserModule {}
