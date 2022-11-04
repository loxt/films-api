import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FilmEntity } from '@/films/entities/film.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(FilmEntity) private readonly filmModel: typeof FilmEntity,
  ) {}
  async findAll(limit = 10, offset = 0, fields?: string[]) {
    await Promise.all([this.validateLimit(limit), this.validateFields(fields)]);
    return this.filmModel.findAll(
      this.enrichQueryOptions(limit, offset, fields),
    );
  }

  async validateLimit(limit: number) {
    if (limit < 0) {
      throw new BadRequestException('Limit must be greater than 0');
    }
  }

  enrichQueryOptions(limit: number, offset: number, fields: string[]) {
    return {
      limit,
      offset,
      attributes: fields.length ? fields : undefined,
    };
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

  async findOne(id: string, fields?: string[]) {
    await this.validateFields(fields);
    const film = await this.filmModel.findOne({
      where: { id },
      ...this.enrichQueryOptions(1, 0, fields),
    });

    if (!film) {
      throw new NotFoundException(`Film with id ${id} not found`);
    }

    return film;
  }
}
