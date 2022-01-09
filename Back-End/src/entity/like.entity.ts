import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity('likes')
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (users) => users.likes, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: number | User;

  @ManyToOne((type) => Post, (posts) => posts.likes, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  post: number | Post;

  static findByUserAndId(user: number, id: number) {
    return this.createQueryBuilder('likes')
      .where('likes.user = :user', { user })
      .andWhere('likes.id = :id', { id })
      .getOne();
  }

  static deleteOne(id: number) {
    return this.createQueryBuilder('likes')
      .delete()
      .from(this)
      .where('likes.id = :id', { id })
      .execute();
  }
}
