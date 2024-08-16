import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MoviesController } from './movies.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [AppService],
})
export class AppModule {}
