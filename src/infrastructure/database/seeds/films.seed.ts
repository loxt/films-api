import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { FilmEntity } from '@/films/entities/film.entity';

import dataToSeed from '@/infrastructure/datasource/original-studios-ghibli-api';

@Seeder({
  model: FilmEntity,
  unique: ['id', 'title'],
})
export default class SeedFilm implements OnSeederInit {
  run() {
    return dataToSeed;
  }

  everyone(data) {
    data.createdAt = new Date().toISOString();
    data.updatedAt = new Date().toISOString();
    data.releaseYear = Number(data.release_date);
    data.ratingScore = Number(data.rt_score);
    data.originalTitle = data.original_title;

    return data;
  }
}
