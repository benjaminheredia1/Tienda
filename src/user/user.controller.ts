import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from './user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un usuario' })
  async create(@Body() body: CreateUsuarioDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUsuarioDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
