import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Module({
  providers: [AuthorsResolver, AuthorsService],
  imports: [TypeOrmModule.forFeature([Author])],
  exports: [AuthorsService],
})
export class AuthorsModule {}
