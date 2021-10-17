import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return [];
  }

  @Get('/:id')
  getMovieById(@Param('id') id: string) {
    return `This will return Movie ${id}`;
  }

  @Post()
  createMovie() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `This will delete a movie ${id}`;
  }
}
