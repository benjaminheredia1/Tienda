import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreatePedidoDtoSchema = z.object({
  cantidad: z.number().describe('Cantidad total de productos en el pedido'),
  precio: z.number().describe('Precio total del pedido'),
  usuarioId: z.number().describe('ID del usuario que realiza el pedido'),
  detalles: z.array(z.object({
    productoId: z.number().describe('ID del producto')
  })).optional().describe('Lista de detalles de productos en el pedido'),
});

export class CreatePedidoDto extends createZodDto(CreatePedidoDtoSchema) {}

export const UpdatePedidoDtoSchema = CreatePedidoDtoSchema.partial();
export class UpdatePedidoDto extends createZodDto(UpdatePedidoDtoSchema) {}