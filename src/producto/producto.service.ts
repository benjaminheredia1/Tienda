import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductoDto } from './producto.dto';

@Injectable()
export class productoService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.producto.findMany();
  }
  create(producto: CreateProductoDto) {
    return this.prisma.producto.create({
      data: producto,
    });
  }
  delete(id: number) {
    return this.prisma.producto.delete({ where: { id: id } });
  }
}
