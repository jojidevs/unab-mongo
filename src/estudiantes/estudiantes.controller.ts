import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EstudiantesDTO } from './estudiantes.dto';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';
 
@ApiTags('estudiantes')
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly servicio: EstudiantesService) {}
 
  @Get()
  @ApiOperation({ summary: 'Obtener todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Datos obtenidos con exito', type: [EstudiantesDTO] })
  ObtenerTodos(): Promise<Estudiantes[]> {
    return this.servicio.todos();
  }
  
 
  @Get(':id/notas')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Id del estudiante a mostrar notas',
    example: '60e7c031c735f56170b894p2'
})
@ApiOperation({ summary: 'Obtener las notas y promedio de un estudiante con su id' })
@ApiResponse({ status: 200, description: 'El estudiante ha sido encontrado con exito', type: EstudiantesDTO })
  ObtenerNotas(@Param('id') id): Promise<Estudiantes[]>{
    
    return this.servicio.ObtenerNotas(id);

  }
 
  @Get(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del estudiante a buscar',
        example: '60e7c031c735f56170b894p2'
    })
    @ApiOperation({ summary: 'Obtener un estudiante con su id' })
    @ApiResponse({ status: 200, description: 'El estudiante ha sido encontrado con exito', type: EstudiantesDTO })
  
  ObtenerUno(@Param('id') id): Promise<Estudiantes>{

    return this.servicio.uno(id);

  }
 
  @Post()
  @ApiOperation({ summary: 'Agregar un estudiante' })
  @ApiResponse({ status: 200, description: 'Datos cargadis con exito', type: EstudiantesDTO })
  crear(@Body() body: Estudiantes): Promise<Estudiantes> {
    return this.servicio.crear(body);
  }
 
  @Put(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Id del estudiante a actualizar',
    example: '60e7c031c735f56170b894p2'
})
  @ApiOperation({ summary: 'Actualizar los datos de un estudiantes' })
  @ApiResponse({ status: 200, description: 'Datos obtenidos con exito', type: EstudiantesDTO })
  actualizar(@Param('id') id,@Body() estudiante:Estudiantes):Promise<Estudiantes>
  {
    return this.servicio.update(id,estudiante);
  }
 
  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Id del estudiante a eliminar',
    example: '60e7c031c735f56170b894p2'
})
  @ApiOperation({ summary: 'Eliminar los datos de un estudiantes' })
  @ApiResponse({ status: 200, description: 'Datos eliminados con exito', type: EstudiantesDTO })
  delete(@Param('id') id):Promise<Estudiantes>
  {
    return this.servicio.delete(id);
  }
}