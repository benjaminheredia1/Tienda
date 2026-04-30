import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateTipoProductoDtoSchema = z.object({
  nombre: z.string({ message: 'El nombre es requerido' }).describe('Nombre del tipo de producto'),
  descripcion: z.string().optional().describe('Descripción del tipo de producto'),
});

export class CreateTipoProductoDto extends createZodDto(CreateTipoProductoDtoSchema) {}

export const UpdateTipoProductoDtoSchema = CreateTipoProductoDtoSchema.partial();
export class UpdateTipoProductoDto extends createZodDto(UpdateTipoProductoDtoSchema) {}
