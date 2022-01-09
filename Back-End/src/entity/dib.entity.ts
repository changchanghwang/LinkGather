import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity('dibs')
export class Dib extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (users) => users.dibs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: number | User;

  @ManyToOne((type) => Post, (posts) => posts.dibs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  post: number | Post;

  static findByUserAndId(user: number, id: number) {
    return this.createQueryBuilder('dibs')
      .where('dibs.user = :user', { user })
      .andWhere('dibs.id = :id', { id })
      .getOne();
  }

  static deleteOne(id: number) {
    return this.createQueryBuilder('dibs')
      .delete()
      .from(this)
      .where('dibs.id = :id', { id })
      .execute();
  }
}
