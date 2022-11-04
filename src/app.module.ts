import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmsModule } from './films/films.module';
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database.sqlite',
      autoLoadModels: true,
      synchronize: true,
      database: 'films',
    }),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
      enableAutoId: false,
    }),
    FilmsModule,
  ],
})
export class AppModule {}
