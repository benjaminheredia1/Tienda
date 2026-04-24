import { Module } from "@nestjs/common";
import { productoController } from "./producto.controller";
import { productoService } from "./producto.service";

@Module({
  controllers: [productoController],
  providers: [productoService],
  exports: [productoService],
})
export class productoModule {}