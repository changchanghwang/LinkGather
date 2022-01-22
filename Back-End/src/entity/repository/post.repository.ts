import { EntityRepository, AbstractRepository } from 'typeorm';
import { Post } from '../post.entity';

@EntityRepository(Post)
export class PostRepository extends AbstractRepository<Post> {
  save(
    url: string,
    title: string,
    desc: string,
    user: number,
    image: string,
    uploadTime: string
  ) {
    const post = new Post();
    post.url = url;
    post.title = title;
    post.desc = desc;
    post.user = user;
    post.image = image;
    post.uploadTime = uploadTime;
    return this.manager.save(post);
  }

  findByUserAndId(user: number, id: number) {
    return this.repository.findOne({ user, id });
  }
  findById(id: number) {
    return this.repository.findOne({ id });
  }
  findAll(user: number) {
    return this.repository
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.dibs', 'dibs', 'dibs.userId=:user', { user })
      .leftJoinAndSelect('posts.likes', 'likes', 'likes.userId=:user', { user })
      .orderBy('posts.id', 'DESC')
      .getMany();
  }

  async updateOne(
    url: string,
    title: string,
    desc: string,
    image: string,
    id: number
  ) {
    const post = await this.findById(id);
    post.url = url;
    post.title = title;
    post.desc = desc;
    post.image = image;
    return this.manager.save(post);
  }

  async updateLikeNum(id: number, likeNum: number) {
    const post = await this.repository.findOne({ id });
    post.likeNum = likeNum;
    return this.manager.save(post);
  }

  deleteOne(id: number) {
    return this.repository.delete({ id });
  }
}
