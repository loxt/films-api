import { Column, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({ timestamps: true, tableName: 'films' })
export class FilmEntity extends Model {
  @Column({ primaryKey: true, type: 'uuid', defaultValue: UUIDV4 })
  id: string;

  @Column
  title: string;

  @Column
  originalTitle: string;

  @Column
  description: string;

  @Column
  releaseYear: number;

  @Column
  ratingScore: number;
}
