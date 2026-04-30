import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateVistaDtoSchema = z.object({
  nombre: z.string({ message: 'El nombre de la vista es requerido' }).describe('Nombre de la vista'),
});

export class CreateVistaDto extends createZodDto(CreateVistaDtoSchema) {}

export const UpdateVistaDtoSchema = CreateVistaDtoSchema.partial();
export class UpdateVistaDto extends createZodDto(UpdateVistaDtoSchema) {}
