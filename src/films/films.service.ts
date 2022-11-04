import { BadRequestException, Injectable } from '@nestjs/common';
import { FilmEntity } from '@/films/entities/film.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(FilmEntity) private readonly filmModel: typeof FilmEntity,
  ) {}
  async findAll(limit = 10, offset = 0, fields: string[] = []) {
    await Promise.all([this.validateLimit(limit), this.validateFields(fields)]);
    return this.filmModel.findAll({
      limit,
      offset,
      attributes: fields.length ? fields : undefined,
    });
  }

  async validateLimit(limit: number) {
    if (limit < 0) {
      throw new BadRequestException('Limit must be greater than 0');
    }
  }

  async validateFields(fields: string[]) {
    // verify if filmModel has all fields
    const filmFields = Object.keys(this.filmModel.getAttributes());
    const invalidFields = fields.filter((field) => !filmFields.includes(field));
    if (invalidFields.length > 0) {
      throw new BadRequestException(
        `Invalid fields: ${invalidFields.join(', ')}`,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }
}
