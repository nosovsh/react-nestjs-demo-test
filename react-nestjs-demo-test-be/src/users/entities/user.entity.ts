import { ObjectId } from 'mongodb';
import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  // @Column({
  //   type: 'boolean',
  //   default: false,
  // })
  // isManager: boolean;

  @Column({
    type: 'string',
  })
  name: string;
}
