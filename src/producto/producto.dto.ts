import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateProductoDtoSchema = z.object({
  nombre: z.string({ message: 'El nombre es requerido' }).describe('Nombre del producto'),
  descripcion: z.string().optional().describe('Descripción del producto'),
  precio: z.number({ message: 'El precio es requerido' }).describe('Precio del producto'),
  tipoProductoId: z.number({ message: 'El ID del tipo de producto es requerido' }).describe('ID del tipo de producto'),
  stock: z.number({ message: 'El stock es requerido' }).describe('Stock disponible'),
});

export class CreateProductoDto extends createZodDto(CreateProductoDtoSchema) {}

export const UpdateProductoDtoSchema = CreateProductoDtoSchema.partial();
export class UpdateProductoDto extends createZodDto(UpdateProductoDtoSchema) {}
