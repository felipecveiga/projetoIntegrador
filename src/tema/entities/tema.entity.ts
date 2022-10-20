import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"tb_tema"})
export class Tema{

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    temaPrincipal: string


    @IsNotEmpty()
    @Column({length: 100, nullable:false})
    descricao: string

    @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
        postagem: Postagem[]
}
