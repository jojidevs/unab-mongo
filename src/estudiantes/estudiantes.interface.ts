import * as mongoose from 'mongoose';

export interface Estudiantes {

  
        Id?: string;
        Nombre: string;
        Genero: string;
        FechaNacimiento: string;
        Carrera: string;
        idMateria: [mongoose.Types.ObjectId];
        
      
      
    
}
