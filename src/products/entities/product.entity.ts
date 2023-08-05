
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class product {
    @PrimaryGeneratedColumn({type: 'int4'}) 

    id: number;
    @Column({type: 'varchar', length: 100, nullable: false})
    name: string
    @Column({type: 'varchar', length: 300, nullable: false})
    descripcion: string;
    @Column({type: 'int4', nullable: false})
    pice: number;
    @Column({type: 'boolean', nullable: false})
    stock: number;
    }