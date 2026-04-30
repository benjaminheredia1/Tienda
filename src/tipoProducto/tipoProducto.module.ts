import { Module } from '@nestjs/common';
import { TipoProductoController } from './tipoProducto.controller';
import { TipoProductoService } from './tipoProducto.service';
@Module({
  controllers: [TipoProductoController],
  providers: [TipoProductoService],
  exports: [TipoProductoService],
})
export class tipoProductoModule {}
