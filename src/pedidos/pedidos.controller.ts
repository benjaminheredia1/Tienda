import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto, UpdatePedidoDto } from './pedidos.dtos';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pedidos (Compras)')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos' })
  async findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pedido por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un pedido' })
  async create(@Body() body: CreatePedidoDto) {
    return this.pedidosService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un pedido' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePedidoDto) {
    return this.pedidosService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pedido' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.delete(id);
  }
}