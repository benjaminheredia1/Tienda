import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { TipoProductoService } from './tipoProducto.service';
import { CreateTipoProductoDto } from './tipoProducto.dto';

@Controller('tipoProducto')
export class TipoProductoController {
  constructor(private readonly tipoProductoService: TipoProductoService) {}
  @Get()
  async findAll() {
    return await this.tipoProductoService.findAll();
  }
  @Post('/')
  async create(@Body() body: CreateTipoProductoDto) {
    return await this.tipoProductoService.create(body);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const id_delete = +id;
    return await this.tipoProductoService.delete(id_delete);
  }
}
