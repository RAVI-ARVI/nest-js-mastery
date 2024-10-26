import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];
  createSong(song) {
    this.songs.push(song);
    return this.songs;
  }
  findSongs() {
    throw new Error('This From Database Error');
  }
}
