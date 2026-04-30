# Tienda API

Una API REST robusta construida con **NestJS** para gestionar una tienda, sus productos, usuarios, pedidos y un sistema dinámico de roles y permisos.

## Tecnologías Principales
- **Framework**: [NestJS](https://nestjs.com/)
- **Base de Datos**: PostgreSQL
- **ORM**: [Prisma](https://www.prisma.io/)
- **Validación de Datos**: [Zod](https://zod.dev/) (implementado mediante `nestjs-zod`)
- **Documentación de API**: Swagger / OpenAPI
- **Autenticación y Seguridad**: JSON Web Tokens (JWT) y encriptación de contraseñas con Bcrypt.

---

## 📦 Módulos y Endpoints Disponibles

Todos los módulos (excepto Autenticación) implementan operaciones CRUD completas (`GET`, `POST`, `PUT`, `DELETE`):

1. **🔒 Autenticación (`/api/auth`)**
   - `POST /api/auth/login`: Validación de credenciales y generación de JWT.
2. **👥 Usuario (`/api/user`)**
   - Gestión de usuarios y administradores. *Las contraseñas se encriptan de forma automática usando bcrypt antes de guardarse.*
3. **🏷️ Producto (`/api/producto`)**
   - Gestión del catálogo, precios y control de inventario (stock).
4. **📁 Tipo de Producto (`/api/tipoProducto`)**
   - Categorías o clasificaciones de los productos.
5. **🛒 Pedidos y Compras (`/api/pedidos`)**
   - Control de los pedidos realizados por los usuarios, y sus relaciones (detalles de la compra).
6. **🔑 Roles (`/api/roles`)**
   - Administración de los diferentes perfiles del sistema (Ej. Admin, Vendedor, Cliente).
7. **🖥️ Vistas (`/api/vistas`)**
   - Registro de las diferentes pantallas/vistas del sistema (Frontend) a las que se puede acceder.
8. **🛡️ Rol Acciones (`/api/rol-acciones`)**
   - Matriz de permisos que vincula un Rol con una Vista y define la acción permitida (leer, crear, eliminar, etc.).

---

## 🚀 Instalación y Configuración

1. **Clonar e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configuración de Variables de Entorno:**
   Asegúrate de configurar el archivo `.env` en la raíz del proyecto. Debería contener al menos la conexión a tu PostgreSQL y el secreto para el JWT:
   ```env
   DATABASE_URL="postgresql://tu_usuario:tu_password@localhost:5432/nombre_tu_db?schema=public"
   PORT=3000
   JWT_SECRET="mi_secreto_super_seguro_123" # Reemplazar en producción
   ```

3. **Sincronización de Base de Datos:**
   Genera el cliente de Prisma y sube el esquema a la base de datos:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

---

## 💻 Ejecutando la Aplicación

```bash
# Iniciar en modo desarrollo
npm run start

# Iniciar en modo desarrollo con recarga automática (watch)
npm run start:dev

# Construir y ejecutar en producción
npm run build
npm run start:prod
```

El servidor se iniciará por defecto en: `http://localhost:3000`

---

## 📖 Documentación Interactiva (Swagger)

La API está completamente autordocumentada. Una vez que el servidor esté en ejecución, puedes explorar todos los endpoints, ver qué datos reciben, probar peticiones en vivo y conocer las estructuras (DTOs) accediendo a:

👉 **[http://localhost:3000/api/docs](http://localhost:3000/api/docs)**

---

## 🛡️ Flujo de Autenticación

El sistema incluye autenticación JWT lista para ser usada:

1. Crea un usuario desde Swagger o Postman utilizando `POST /api/user`. 
2. Realiza un `POST /api/auth/login` con el `usuario` y la `password`.
3. El sistema devolverá un `access_token` JWT firmado.
4. *(Uso de Desarrollador)*: Para proteger cualquier controlador de la API en el código fuente, simplemente importa y usa el Guard proporcionado:
   ```typescript
   import { UseGuards } from '@nestjs/common';
   import { JwtAuthGuard } from '../auth/jwt-auth.guard';

   @UseGuards(JwtAuthGuard)
   @Get('ruta-secreta')
   miMetodoProtegido() { ... }
   ```
