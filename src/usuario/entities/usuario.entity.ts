import { IsEmail, IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";




@Entity({name: "tb_usuario"})

export class Usuario{

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty ()   
    @MaxLength(50)                                 
    @Column({length: 50, nullable:false})
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false})
    usuario: string //email

   
    @IsNotEmpty () 
    @MinLength(6)                                    
    @Column({length: 255, nullable:false})
    senha: string

    
    @MaxLength(8000)                                
    @Column({length: 8000})
    foto: string


    @OneToMany(() => Postagem, (Postagem) => Postagem.usuario)
        postagem: Postagem[]

}