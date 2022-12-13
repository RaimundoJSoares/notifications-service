import { CreateNotificationBody } from './create.notification.body';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
