import { Post, Get, Body, Delete, Param, Put, Controller, ParseIntPipe } from '@nestjs/common';
import { productoService } from './producto.service';
import { CreateProductoDto, UpdateProductoDto } from './producto.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('producto')
export class productoController {
  constructor(private readonly productoService: productoService) {}
  
  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un producto' })
  create(@Body() producto: CreateProductoDto) {
    return this.productoService.create(producto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto' })
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProductoDto) {
    return this.productoService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.delete(id);
  }
}
