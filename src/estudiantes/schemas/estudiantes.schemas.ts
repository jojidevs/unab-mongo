import * as mongoose from 'mongoose';
 //cambiar los datos por los de la BD
 //cuando querramos enviar mandar a la bd el doc, los datos pasan del dto al schema y el schema pasa a la bd
export const EstudianteSchema= new mongoose.Schema({
    Nombre: String,
    Genero: String,
    FechaNacimiento: String,
    Carrera: String,
    
    
    
    
    //Nombre: {type: String, require:true},
    //Genero: {type: String, require:true},
   // FechaNacimiento: {type: String, require:true},
    //Carrera: {type: String, require:true},
    //idMateria: [mongoose.Types.ObjectId()],
});
