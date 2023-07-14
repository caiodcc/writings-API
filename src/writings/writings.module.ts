import { Module } from '@nestjs/common';
import { WritingsService } from './writings.service';
import { WritingsController } from './writings.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [WritingsController],
  providers: [WritingsService, PrismaService]
})
export class WritingsModule {}
