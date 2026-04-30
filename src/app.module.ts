import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { tipoProductoModule } from './tipoProducto/tipoProducto.module';
import { productoModule } from './producto/producto.module';
import { prismaModule } from './prisma/prisma.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { RolesModule } from './roles/roles.module';
import { VistasModule } from './vistas/vistas.module';
import { RolAccionesModule } from './rol-acciones/rol-acciones.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    tipoProductoModule,
    productoModule,
    prismaModule,
    UserModule,
    PedidosModule,
    RolesModule,
    VistasModule,
    RolAccionesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
