import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookService } from './app.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
