import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaitingService } from './raiting.service';
import { CreateRaitingDto } from './dto/create-raiting.dto';
import { UpdateRaitingDto } from './dto/update-raiting.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Raiting')
@Controller('raiting')
export class RaitingController {
  constructor(private readonly raitingService: RaitingService) {}

  @Post()
  create(@Body() createRaitingDto: CreateRaitingDto) {
    return this.raitingService.create(createRaitingDto);
  }

  @Get()
  findAll() {
    return this.raitingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raitingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaitingDto: UpdateRaitingDto) {
    return this.raitingService.update(+id, updateRaitingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raitingService.remove(+id);
  }
}
