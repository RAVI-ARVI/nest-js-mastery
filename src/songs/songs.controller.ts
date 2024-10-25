import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  createSong() {
    return this.songsService.createSong();
  }

  @Get()
  findAllSongs() {
    return this.songsService.findSongs();
  }

  @Get(':id')
  findSong() {
    return 'This is a sing song';
  }

  @Put(':id')
  updateSong() {
    return 'This is updated';
  }
  @Delete(':id')
  deleteSong() {
    return 'This is delete ';
  }
}
