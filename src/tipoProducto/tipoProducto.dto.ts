import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateTipoProductoDtoSchema = z.object({
  nombre: z.string('El nombre debe ser una cadena de texto'),
  descripcion: z
    .string('La descripción debe ser una cadena de texto')
    .optional(),
});

export class CreateTipoProductoDto extends createZodDto(
  CreateTipoProductoDtoSchema,
) {}
