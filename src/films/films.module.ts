import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmEntity } from './entities/film.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import SeedFilm from '@/infrastructure/database/seeds/films.seed';

@Module({
  imports: [
    SequelizeModule.forFeature([FilmEntity]),
    SeederModule.forFeature([SeedFilm]),
  ],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
