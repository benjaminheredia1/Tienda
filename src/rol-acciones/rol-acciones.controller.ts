import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { RolAccionesService } from './rol-acciones.service';
import { CreateRolAccionDto, UpdateRolAccionDto } from './rol-acciones.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Rol Acciones')
@Controller('rol-acciones')
export class RolAccionesController {
  constructor(private readonly rolAccionesService: RolAccionesService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las acciones de rol' })
  async findAll() {
    return this.rolAccionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una acción de rol por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rolAccionesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una acción de rol' })
  async create(@Body() body: CreateRolAccionDto) {
    return this.rolAccionesService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una acción de rol' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRolAccionDto) {
    return this.rolAccionesService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una acción de rol' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.rolAccionesService.delete(id);
  }
}
