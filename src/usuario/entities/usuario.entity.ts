import { IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";
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

    @IsNotEmpty () 
    @MaxLength(30)                                     
    @Column({length: 30, nullable:false, unique: true})
    nick: string

    @IsNotEmpty ()  
    @MaxLength(40)                                  
    @Column({length: 40, nullable:false, unique:true})
    email: string

    @IsNotEmpty () 
    @MinLength(6)
    @MaxLength(20)                                     
    @Column({length: 20, nullable:false})
    senha: string

    
    @MaxLength(8000)                                
    @Column({length: 8000, nullable:true})
    foto: string


    @OneToMany(() => Postagem, (Postagem) => Postagem.usuario)
        postagem: Postagem[]

}