import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private authorsService: AuthorsService,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOneById(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  getAuthor(id: number): Promise<Author> {
    return this.authorsService.findOne(id);
  }
}
