import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateRolAccionDtoSchema = z.object({
  rolId: z.number({ message: 'El ID del rol es requerido' }).describe('ID del rol'),
  vistaId: z.number({ message: 'El ID de la vista es requerido' }).describe('ID de la vista'),
  Accion: z.string({ message: 'La acción es requerida' }).describe('Acción permitida (ej. crear, leer, etc.)'),
});

export class CreateRolAccionDto extends createZodDto(CreateRolAccionDtoSchema) {}

export const UpdateRolAccionDtoSchema = CreateRolAccionDtoSchema.partial();
export class UpdateRolAccionDto extends createZodDto(UpdateRolAccionDtoSchema) {}
