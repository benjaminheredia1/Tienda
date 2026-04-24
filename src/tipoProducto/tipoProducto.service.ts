import { Injectable } from '@nestjs/common';
import { CreateTipoProductoDto } from './tipoProducto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TipoProductoService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.tipoProducto.findMany();
  }
  async create(body: CreateTipoProductoDto) {
    return await this.prisma.tipoProducto.create({
      data: body,
    });
  }
  async delete(id: number) {
    return await this.prisma.tipoProducto.delete({ where: { id: id } });
  }
}
