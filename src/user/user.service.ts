import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async findByUsuario(usuario: string) {
    return this.prisma.usuario.findFirst({ where: { usuario } });
  }

  async create(data: CreateUsuarioDto) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    return this.prisma.usuario.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async update(id: number, data: UpdateUsuarioDto) {
    let updateData = { ...data };
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }
    return this.prisma.usuario.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: number) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
