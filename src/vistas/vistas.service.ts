import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVistaDto, UpdateVistaDto } from './vistas.dto';

@Injectable()
export class VistasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vistas.findMany({ include: { rolAcciones: true } });
  }

  async findOne(id: number) {
    return this.prisma.vistas.findUnique({ where: { id }, include: { rolAcciones: true } });
  }

  async create(data: CreateVistaDto) {
    return this.prisma.vistas.create({ data });
  }

  async update(id: number, data: UpdateVistaDto) {
    return this.prisma.vistas.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.vistas.delete({ where: { id } });
  }
}
