import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './writings/entities/roles.guard';
import { WritingsController } from './writings/writings.controller';
import { WritingsModule } from './writings/writings.module';
import { WritingsService } from './writings/writings.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, WritingsController],
  providers: [AppService, WritingsService, PrismaService],
})
export class AppModule {}
