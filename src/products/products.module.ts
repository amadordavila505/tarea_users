import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './dto/product.dto';
import { product } from '../user/user.entity';
import { ProductModule } from './products.module';

@Module({
    imports: [TypeOrmModule.forFeature([product])],
    provider: [],
    Controller:[],
    
    export class ProductModule{}
})

export { ProductModule };
