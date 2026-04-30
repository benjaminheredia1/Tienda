import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { TipoProductoService } from './tipoProducto.service';
import { CreateTipoProductoDto, UpdateTipoProductoDto } from './tipoProducto.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Tipo Producto')
@Controller('tipoProducto')
export class TipoProductoController {
  constructor(private readonly tipoProductoService: TipoProductoService) {}
  
  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de productos' })
  async findAll() {
    return await this.tipoProductoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de producto por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.tipoProductoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un tipo de producto' })
  async create(@Body() body: CreateTipoProductoDto) {
    return await this.tipoProductoService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un tipo de producto' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTipoProductoDto) {
    return await this.tipoProductoService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tipo de producto' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.tipoProductoService.delete(id);
  }
}
