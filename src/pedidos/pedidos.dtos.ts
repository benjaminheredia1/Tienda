import { createZodDto } from "nestjs-zod";
import {z} from "zod";

export const CreatePedidoDtoSchema = z.object({
   tipoProducto: z.number('El tipo de producto debe ser un número'),
    stock: z.number('El stock debe ser un número'),
    precio: z.float32('El precio debe ser un número decimal'),
    nombre: z.string('El nombre debe ser una cadena de texto'),
    descripcion: z.string('La descripción debe ser una cadena de texto').optional(),
});

export class CreatePedidoDto extends createZodDto(CreatePedidoDtoSchema){}