import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateUsuarioDtoSchema = z.object({
  nombre: z.string().describe('Nombre del usuario'),
  usuario: z.string().optional().describe('Nombre de usuario (login)'),
  password: z.string().describe('Contraseña'),
  email: z.string().email().describe('Correo electrónico'),
  telefono: z.string().optional().describe('Teléfono'),
  direccion: z.string().optional().describe('Dirección'),
  rolId: z.number().describe('ID del rol'),
});

export class CreateUsuarioDto extends createZodDto(CreateUsuarioDtoSchema) {}

export const UpdateUsuarioDtoSchema = CreateUsuarioDtoSchema.partial();
export class UpdateUsuarioDto extends createZodDto(UpdateUsuarioDtoSchema) {}
