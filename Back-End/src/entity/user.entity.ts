import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Like } from './like.entity';
import { Post } from './post.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  password: string;

  @OneToMany((type) => Post, (posts) => posts.user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  posts: Post[];

  @OneToMany((type) => Like, (likes) => likes.user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  likes: Like[];

  static findOneByEmail(email: string) {
    return this.createQueryBuilder('users')
      .where('users.email=:email', { email })
      .getOne();
  }
  static findOneById(id: string) {
    return this.createQueryBuilder('users')
      .where('users.id=:id', { id })
      .getOne();
  }
}
