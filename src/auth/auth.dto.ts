import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LoginDtoSchema = z.object({
  usuario: z.string({ message: 'El nombre de usuario es requerido' }).describe('Nombre de usuario (login)'),
  password: z.string({ message: 'La contraseña es requerida' }).describe('Contraseña'),
});

export class LoginDto extends createZodDto(LoginDtoSchema) {}
