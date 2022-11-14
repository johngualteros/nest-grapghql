import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from 'src/authors/authors.module';
import { Post } from './post.entity';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
})
export class PostsModule {}
