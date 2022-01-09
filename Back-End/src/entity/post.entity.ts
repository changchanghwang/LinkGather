import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Like } from './like.entity';
import { User } from './user.entity';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  desc: string;

  @Column({
    nullable: false,
  })
  image: string;

  @Column({
    nullable: false,
  })
  url: string;

  @Column({
    nullable: false,
  })
  uploadTime: string;

  @Column({
    nullable: true,
    default: 0,
  })
  likeNum: number;

  @ManyToOne((type) => User, (users) => users.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: number | User;

  @OneToMany((type) => Like, (likes) => likes.user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  likes: Like[];

  static findByUserAndId(user: number, id: number) {
    return this.createQueryBuilder('posts')
      .where('posts.user = :user', { user })
      .andWhere('posts.id = :id', { id })
      .getOne();
  }

  static updateOne(
    url: string,
    title: string,
    desc: string,
    image: string,
    id: number
  ) {
    return this.createQueryBuilder('posts')
      .update(this)
      .set({ title, url, desc, image })
      .where('id = :id', { id })
      .execute();
  }

  static deleteOne(id: number) {
    return this.createQueryBuilder('posts')
      .delete()
      .from(this)
      .where('id=:id', { id })
      .execute();
  }
}
