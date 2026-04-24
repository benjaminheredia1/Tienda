import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
   async find(){ 
       return 'Hello World';
   }  
}
