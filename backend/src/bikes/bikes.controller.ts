import { Body, Controller, Get, Headers, Param, Post, Query } from '@nestjs/common';
import { BikesService } from './bikes.service';

@Controller('bikes')
export class BikesController {
  constructor(private bikes: BikesService) {}

  @Get()
  list(@Query('type') type?: string) {
    return this.bikes.list({ type });
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.bikes.get(id);
  }

  @Post()
  create(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.bikes.create(userId, body);
  }
}


