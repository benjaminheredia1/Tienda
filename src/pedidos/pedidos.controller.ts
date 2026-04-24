import {Controller, Post} from "@nestjs/common";
import {PedidosService} from "./pedidos.service";

@Controller('pedidos')
export class PedidosController {
   constructor(private readonly pedidosService: PedidosService) {}
   @Post()
   async create(){
       return this.pedidosService.create();
   }

}