
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class product {
    @PrimaryGeneratedColumn({type: 'int4'}) 

    id: number;
    @Column({type: 'varchar', length: 100, nullable: false})
    name: string
    @Column({type: 'varchar', length: 300, nullable: false})
    password: string;
    @Column({type: 'varchar', length: 400, nullable: false})
    email: string;
    @Column({type: 'varchar', length: 300, nullable: false})
    sexo: string;

    @Column({type: 'boolean', default: true})
    active: boolean;
    }