import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { VistasService } from './vistas.service';
import { CreateVistaDto, UpdateVistaDto } from './vistas.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Vistas')
@Controller('vistas')
export class VistasController {
  constructor(private readonly vistasService: VistasService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las vistas' })
  async findAll() {
    return this.vistasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una vista por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vistasService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una vista' })
  async create(@Body() body: CreateVistaDto) {
    return this.vistasService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una vista' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateVistaDto) {
    return this.vistasService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una vista' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.vistasService.delete(id);
  }
}
