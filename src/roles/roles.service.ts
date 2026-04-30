import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRolDto, UpdateRolDto } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.rol.findMany({ include: { rolAcciones: true } });
  }

  async findOne(id: number) {
    return this.prisma.rol.findUnique({ where: { id }, include: { rolAcciones: true } });
  }

  async create(data: CreateRolDto) {
    return this.prisma.rol.create({ data });
  }

  async update(id: number, data: UpdateRolDto) {
    return this.prisma.rol.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.rol.delete({ where: { id } });
  }
}
