import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateRolDtoSchema = z.object({
  nombre: z.string({ message: 'El nombre del rol es requerido' }).describe('Nombre del rol'),
  descripcion: z.string().optional().describe('Descripción del rol'),
});

export class CreateRolDto extends createZodDto(CreateRolDtoSchema) {}

export const UpdateRolDtoSchema = CreateRolDtoSchema.partial();
export class UpdateRolDto extends createZodDto(UpdateRolDtoSchema) {}
