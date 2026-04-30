import { Injectable } from '@nestjs/common';
import { CreateTipoProductoDto, UpdateTipoProductoDto } from './tipoProducto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TipoProductoService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.tipoProducto.findMany();
  }
  async findOne(id: number) {
    return await this.prisma.tipoProducto.findUnique({ where: { id } });
  }
  async create(body: CreateTipoProductoDto) {
    return await this.prisma.tipoProducto.create({
      data: body,
    });
  }
  async update(id: number, data: UpdateTipoProductoDto) {
    return await this.prisma.tipoProducto.update({
      where: { id },
      data,
    });
  }
  async delete(id: number) {
    return await this.prisma.tipoProducto.delete({ where: { id } });
  }
}
