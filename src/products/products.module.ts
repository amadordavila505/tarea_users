import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from '../user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([product])],
    providers: [],
    controllers:[],

})

export class ProductModule {};
