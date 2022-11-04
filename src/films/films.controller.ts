import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  // get query params
  async findAll(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('fields') fields: string,
  ) {
    // verify if query fields contains comma separated values
    const fieldsArray = fields ? fields.split(',') : [];

    return this.filmsService.findAll(limit, offset, fieldsArray);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('fields') fields: string) {
    const fieldsArray = fields ? fields.split(',') : [];
    return this.filmsService.findOne(id, fieldsArray);
  }
}
