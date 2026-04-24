import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateProductoDtoSchema = z.object({
  nombre: z.string('El nombre debe ser una cadena de texto'),
  descripcion: z
    .string('La descripción debe ser una cadena de texto')
    .optional(),
  precio: z.number('El precio debe ser un número'),
  tipoProductoId: z.number('El ID del tipo de producto debe ser un número'),
  stock: z.number('El stock debe ser un número'),
});

export class CreateProductoDto extends createZodDto(CreateProductoDtoSchema) {}
