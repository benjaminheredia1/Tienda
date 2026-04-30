import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductoDto, UpdateProductoDto } from './producto.dto';

@Injectable()
export class productoService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.producto.findMany({ include: { tipoProducto: true } });
  }
  findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id }, include: { tipoProducto: true } });
  }
  create(producto: CreateProductoDto) {
    return this.prisma.producto.create({
      data: {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: +producto.precio,
        tipoProductoId: +producto.tipoProductoId,
        stock: +producto.stock,
      },
    });
  }
  update(id: number, data: UpdateProductoDto) {
    return this.prisma.producto.update({
      where: { id },
      data,
    });
  }
  delete(id: number) {
    return this.prisma.producto.delete({ where: { id } });
  }
}
