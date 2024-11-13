export default class Cl_examen {
    constructor () {
        this.estudiantes = [];


    }

    agregarEstudiante (estudiante) {
        this.estudiantes.push(estudiante);
    }

    notaPromedio () {
        let acumPromedio = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            acumPromedio += this.estudiantes[i].nota;
        }
        return acumPromedio / this.estudiantes.length;
    }



    porcentajeAprobados () {
        let contAprobados = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota >= 9.6) {
                contAprobados ++;
            }
        }
        return (contAprobados / this.estudiantes.length) * 100;
    }

    porcentajeReprobados () {
        let contReprobados = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota < 9.6) {
                contReprobados ++;
            }
        }
        return (contReprobados / this.estudiantes.length) * 100;
    }



    mejorNota () {
        let mejor = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota > mejor) {
                mejor = this.estudiantes[i].nota;
            }
        }
        return mejor;
    }

    chicasEncimaPromedio() {
        const promedio = this.notaPromedio(); 
        let contChicas = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].sexo === "F" && this.estudiantes[i].nota > promedio) {
                contChicas++;
            }
        }
        return contChicas;
    }
    

}
