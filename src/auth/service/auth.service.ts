import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/serivce/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";
import { UsuarioLogin } from "../entities/usuariologin.entity";



@Injectable()
export class AuthService {

    constructor(


        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ){ }


    async validarUsuario(username: string, password: string): Promise <any> {

        const buscarUsuario = await this.usuarioService.findByUsuario(username)

        if(!buscarUsuario)

            throw new HttpException('usuario não encontrado', HttpStatus.NOT_FOUND)

        const match = await this.bcrypt.compararSenha(buscarUsuario.senha, password)


        if(buscarUsuario && match){
            const {senha,...result} = buscarUsuario 
        
            return result
        }

        return null;

    }

    async login(usuarioLogin: any){

        const payload = {userName: usuarioLogin.usuario, sub: "db_blogpessoal"}                    // o payload  armazena toda informação, toda essa informação fica armazenada dentro do payload
    
        return {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`  //estamos transformando essa dado em um TOKEN e estamos fazendo a assinatura (a assinatura junta os dados) do Service
        }
    }



}