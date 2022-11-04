import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  // get query params
  async findAll(@Query() query: any) {
    const limit = query.limit || 10;
    const offset = query.offset || 0;
    const fields = query.fields ? query.fields.split(',') : [];
    return this.filmsService.findAll(limit, offset, fields);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }
}
