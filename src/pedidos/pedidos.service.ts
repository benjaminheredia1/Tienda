import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto, UpdatePedidoDto } from './pedidos.dtos';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.compras.findMany({ include: { comprasDetalles: true, usuario: true } });
  }

  async findOne(id: number) {
    return this.prisma.compras.findUnique({ where: { id }, include: { comprasDetalles: true, usuario: true } });
  }

  async create(data: CreatePedidoDto) {
    return this.prisma.compras.create({
      data: {
        cantidad: data.cantidad,
        precio: data.precio,
        usuarioId: data.usuarioId,
        comprasDetalles: {
          create: data.detalles?.map(d => ({
            productoId: d.productoId,
          })) || []
        }
      },
      include: { comprasDetalles: true }
    });
  }

  async update(id: number, data: UpdatePedidoDto) {
    return this.prisma.compras.update({
      where: { id },
      data: {
        cantidad: data.cantidad,
        precio: data.precio,
        usuarioId: data.usuarioId,
      }
    });
  }

  async delete(id: number) {
    // Delete detalles first to avoid foreign key constraints
    await this.prisma.comprasDetalles.deleteMany({ where: { compraId: id } });
    return this.prisma.compras.delete({ where: { id } });
  }
}