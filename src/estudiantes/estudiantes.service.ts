import { Injectable } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { tsConstructSignatureDeclaration } from '@babel/types';
@Injectable()
export class EstudiantesService {
  //aqui va la conexion a base de datos

  //aqui van las funciones crud

  constructor(
    @InjectModel('Estudiantes')
    private readonly estudianteModel: Model<Estudiantes>,
  ) {}

  async todos(): Promise<Estudiantes[]> {
    return await this.estudianteModel.find();
  }

  async uno(id: string): Promise<Estudiantes> {
    return await this.estudianteModel.findOne({ _id: id });
  }

  async ObtenerNotas(id: string): Promise<Estudiantes[]> {
    return await this.estudianteModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) },
      },
      {
       $unwind: '$idMateria' 
      },
      {
        $lookup: {
            from: "materias",
            localField: "idMateria",
            foreignField: "_id",
            as: "respuesta"
        }
    },
    {
      $unwind: "$respuesta"
  },
  {
      $group: {
          _id: {
              NombreMateria: "$respuesta.NombreMateria"
          },
          Nota1: { $sum: '$respuesta.Nota1'  }, 
          Nota2: { $sum: '$respuesta.Nota2'  },
          Nota3: { $sum: '$respuesta.Nota3'  }
          
      }
  },
  {
    $project: {
        _id: '$_id',
        Nota1: '$Nota1' , 
        Nota2:'$Nota2' ,
        Nota3: '$Nota3',
        Promedio: {$round: [{$divide: [{ $sum: ['$Nota1','$Nota2','$Nota3']},3]},2] },
       

    }
}

    
    ]);
  }

  async crear(estudiante: Estudiantes): Promise<Estudiantes> {
    const nuevo = new this.estudianteModel(estudiante);
    return await nuevo.save();
  }

  async update(id: string, estudiante: Estudiantes): Promise<Estudiantes> {
    return await this.estudianteModel.findByIdAndUpdate(id, estudiante, {
      new: true,
    });
  }

  async delete(id: string): Promise<Estudiantes> {
    return await this.estudianteModel.findByIdAndRemove(id);
  }
}
