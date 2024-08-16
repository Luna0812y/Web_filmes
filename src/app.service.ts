import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly apiKey = process.env.OMDB_API_KEY;

  constructor(private readonly httpService: HttpService) {
    console.log('OMDB API Key:', this.apiKey); 
  }

  async searchMovies(title: string) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=${this.apiKey}`;
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      console.log('API Response:', response.data); 
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      throw new Error(`Failed to fetch movie data: ${error.message}`);
    }
  }
}
