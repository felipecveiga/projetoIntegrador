import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity({name:"tb_postagem"})
export class Postagem {

    @PrimaryGeneratedColumn()
    id:number


    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100,nullable:false})
    titulo:string

    @IsNotEmpty()
    @MaxLength(1800)
    @Column({length: 1800,nullable:false})
    texto:string

    @MaxLength(4000)
    @Column({length: 4000,nullable:true})
    foto:string

    @MaxLength(4000)
    @Column({length: 4000,nullable:true})
    linkOrg:string

    @IsNotEmpty()
    @UpdateDateColumn()
    data:Date
    

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
       onDelete: "CASCADE"
    })
    tema: Tema 

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
     })
     usuario: Usuario
}