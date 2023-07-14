import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata } from '@nestjs/common';
import { WritingsService } from './writings.service';
import { CreateWritingDto } from './dtos/create-writing.dto';
import { UpdateWritingDto } from './dtos/update-writing.dto';
import { Role } from './entities/role.enum';
import { Roles } from './entities/roles.decorator';


@Controller('writings')
export class WritingsController {
  constructor(private readonly writingsService: WritingsService) {
  }

  @Post()
  async create(@Body() data: CreateWritingDto) {
    return await this.writingsService.createWriting(data);
    
  }
  
  @Get()
  findAll(){
    return this.writingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritingDto: UpdateWritingDto){
    return this.writingsService.update(+id, updateWritingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.writingsService.remove(+id);
  }
}