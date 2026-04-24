import { Post, Get, Body, Delete, Param, Controller } from '@nestjs/common';
import { productoService } from './producto.service';
import { CreateProductoDto } from './producto.dto';

@Controller('producto')
export class productoController {
  constructor(private readonly productoService: productoService) {}
  @Get()
  findAll() {
    return this.productoService.findAll();
  }
  @Post()
  create(@Body() producto: CreateProductoDto) {
    return this.productoService.create(producto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    const id_delete = +id;
    return this.productoService.delete(id_delete);
  }
}
