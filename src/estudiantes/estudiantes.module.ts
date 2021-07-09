import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudianteSchema } from './schemas/estudiantes.schemas';

@Module({
    imports:[MongooseModule.forFeature([{name:'Estudiantes',schema:EstudianteSchema}])],
    providers: [EstudiantesService],
    controllers: [EstudiantesController],
  })
  
export class EstudiantesModule {




}
