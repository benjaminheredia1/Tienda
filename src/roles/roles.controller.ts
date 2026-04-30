import { Controller, Post, Get, Body, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolDto, UpdateRolDto } from './roles.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los roles' })
  async findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un rol por ID' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un rol' })
  async create(@Body() body: CreateRolDto) {
    return this.rolesService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un rol' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRolDto) {
    return this.rolesService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un rol' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.delete(id);
  }
}
