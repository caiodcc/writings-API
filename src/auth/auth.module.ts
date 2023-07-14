import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { WritingsService } from 'src/writings/writings.service';

@Module({
  imports: [WritingsService],
  providers: [AuthService]
})
export class AuthModule {}
