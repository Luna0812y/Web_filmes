import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchResult } from './movies.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly appService: AppService) {}

  @Get('search')
  async search(@Query('title') title: string): Promise<any> {
    try {
      const result: SearchResult = await this.appService.searchMovies(title);
      console.log('Search Result:', result);
      return result;
    } catch (error) {
      return { message: error.message };
    }
  }

}
