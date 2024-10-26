import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createSongsDto } from './dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  createSong(@Body() createSongDto: createSongsDto) {
    return this.songsService.createSong(createSongDto);
  }

  @Get()
  findAllSongs() {
    try {
      return this.songsService.findSongs();
    } catch (error) {
      throw new HttpException(
        'This This internal error bro',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  //@Param('id', ParseIntPipe) id: number  if you used this this is perfectly fine this is "Validation failed (numeric string is expected)" .
  @Get(':id')
  findSong(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `this is Id bro ${id} and ${typeof id}`;
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
