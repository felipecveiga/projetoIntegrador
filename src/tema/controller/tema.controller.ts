import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";


@UseGuards(JwtAuthGuard)
@Controller('/tema')
export class temaController {

    constructor(private readonly temaService: TemaService){}

//Get all

@Get()
@HttpCode(HttpStatus.OK)                        
findAll(): Promise<Tema[]> {
    return this.temaService.findAll()
}

//Get ID

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id',ParseIntPipe) id: number) : Promise<Tema>{
    return this.temaService.findById(id)
}

//Get Tema

@Get('/tema/:tema')
    @HttpCode(HttpStatus.OK)
    findByTema(@Param('tema') tema: string) : Promise<Tema[]> {
        return this.temaService.findByTema(tema)
    }


//Post

@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() tema: Tema ): Promise<Tema>{
    return this.temaService.create(tema)
}


//Put

@Put()
@HttpCode(HttpStatus.OK)
update (@Body() tema: Tema ): Promise<Tema>{                

    return this.temaService.update(tema)
}

//delet

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id',ParseIntPipe) id: number){   
    return this.temaService.delete(id)
}

}
