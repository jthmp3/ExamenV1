/*1. EXAMEN
Se desea llevar un control de los estudiantes que  
asisten a presentar un examen. Se tiene por cada  
participante: nombre, cédula, sexo y nota. Se requiere  
de un programa que permita el registro de esta  
información, conociendo al principio de la ejecución el  
valor del examen y el mínimo aprobatorio.  

Estructuras de datos recomendadas:
 Cl_examen: valor, minAprueba  
 Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo y nota  

Primeros requerimientos:

Los datos entrada vienen en un archivo (con  
import... ver anexo)  
 Porcentaje de aprobados y reprobados  
 Estudiantes con la mejor nota  
 Chicas por encima de la nota promedio*/

 import  Cl_examen  from "./Cl_examen.js";
 import  Cl_estudiante  from "./Cl_estudiante.js";
 import  Dt_examen  from "./Dt_examen.js";
 import  Dt_estudiante  from "./Dt_estudiante.js";


 const examen = new Cl_examen();



 Dt_estudiante.forEach(estudiante => {
    examen.agregarEstudiante(new Cl_estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota));
 });  


 
 alert(
    `Estudiantes con la mejor nota: ${JSON.stringify(
      examen.mejorNota()
    )}`
  );
  alert(`las chicas por encima de la nota promedio: ${examen.chicasEncimaPromedio()}`);

  alert(
    `porcentaje de aprobados : ${JSON.stringify(
      examen.porcentajeAprobados()
    )}`
  );
  alert(
    `porcentaje de reprobados: ${examen.porcentajeReprobados()}`
  );
  alert(
    `nota promedio: ${examen.notaPromedio().toFixed(2)}`
  );