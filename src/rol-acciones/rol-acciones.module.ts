import { Module } from '@nestjs/common';
import { RolAccionesController } from './rol-acciones.controller';
import { RolAccionesService } from './rol-acciones.service';

@Module({
  controllers: [RolAccionesController],
  providers: [RolAccionesService],
})
export class RolAccionesModule {}
