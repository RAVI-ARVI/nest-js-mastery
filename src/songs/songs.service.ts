import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];
  createSong() {
    this.songs.push('Test Song');
    return this.songs;
  }
  findSongs() {
    return this.songs;
  }
}
