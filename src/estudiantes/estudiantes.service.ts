import { Injectable } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class EstudiantesService {
    //aqui va la conexion a base de datos
    
    //aqui van las funciones crud
    
    constructor(@InjectModel('Estudiantes') private readonly estudianteModel:Model<Estudiantes>){}


    async todos():Promise<Estudiantes[]> {
      return await this.estudianteModel.find();
    }
   
    async uno(id:string):Promise<Estudiantes> {
      return await this.estudianteModel.findOne({_id:id});
    }
   
    async crear(estudiante:Estudiantes):Promise<Estudiantes>{
      const nuevo= new this.estudianteModel(estudiante);
      return await nuevo.save();
    }
   
   async update(id:string, estudiante:Estudiantes):Promise<Estudiantes>
  {
    return await this.estudianteModel.findByIdAndUpdate(id,estudiante,{new:true});
  }
   
  async delete(id:string):Promise<Estudiantes>
  {
    return await this.estudianteModel.findByIdAndRemove(id);
  }
  


}
