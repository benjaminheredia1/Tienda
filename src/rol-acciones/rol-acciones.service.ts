import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRolAccionDto, UpdateRolAccionDto } from './rol-acciones.dto';

@Injectable()
export class RolAccionesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.rolAcciones.findMany({ include: { rol: true, vista: true } });
  }

  async findOne(id: number) {
    return this.prisma.rolAcciones.findUnique({ where: { id }, include: { rol: true, vista: true } });
  }

  async create(data: CreateRolAccionDto) {
    return this.prisma.rolAcciones.create({ data });
  }

  async update(id: number, data: UpdateRolAccionDto) {
    return this.prisma.rolAcciones.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.rolAcciones.delete({ where: { id } });
  }
}
