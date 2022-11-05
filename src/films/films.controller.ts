import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @ApiImplicitQuery({
    name: 'limit',
    description: 'The maximum number of films to return',
    required: false,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'offset',
    description: 'The number of films to skip',
    required: false,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'fields',
    description: 'The fields to return',
    required: false,
    type: String,
  })
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

  @ApiImplicitQuery({
    name: 'fields',
    description: 'The fields to return',
    required: false,
    type: String,
  })
  @Get(':id')
  findOne(@Param('id') id: string, @Query('fields') fields: string) {
    const fieldsArray = fields ? fields.split(',') : [];
    return this.filmsService.findOne(id, fieldsArray);
  }
}
