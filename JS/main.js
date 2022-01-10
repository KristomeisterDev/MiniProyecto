///////////////////////matricula////////////////////////////////////////////////
let alumnWord;
let ageWord;
let addressWord;
let groupWord;

alumnWord = "Joshua Gonzalez";
ageWord = "24 años";
addressWord = "Calle 60 Centro";
groupWord = "1A";

function matriculaAlumno() {
    let tableCell = document.getElementById("matriculaAlumno");

    let labelOne = document.createElement("p");
    labelOne.innerText = `La Matricula del alumno es: ${alumnWord[7]}${alumnWord[8]}${alumnWord[0]}${ageWord[0]}${ageWord[1]}${groupWord[0]}${groupWord[1]}`;

    tableCell.appendChild(labelOne);
}
matriculaAlumno();

function save(){
    function student(nombre,edad,domicilio,grupo){
      this.name = nombre;
      this.age = edad;
      this.address = domicilio;
      this.group = grupo;
    }
    let saveName;
    let saveAge;
    let saveAdress;
    let saveGroup;

    saveName = document.getElementById("nombre").value;
    saveAge = document.getElementById("edad").value;
    saveAdress = document.getElementById("domicilio").value;
    saveGroup = document.getElementById("grupo").value;
    newStudent = new student(saveName, saveAge, saveAdress, saveGroup);
    addStudent();
}
    let dbArray= [];
    function addStudent(){
      dbArray.push(newStudent);
      console.log(dbArray);
      document.getElementById("tabla").innerHTML += '<tbody><td>'+newStudent.name+'</td><td>'+newStudent.age+'</td><td>'+newStudent.address+'</td><td>'+newStudent.group+'</td></tbody>';
    };
///////////////////////////promedio/////////////////////////////////////////////
/* funciona por medio de prompt sin formulario
let esp;
let mat;
let nat;
let dep;
let ing;
let art;
let prom;

esp = parseFloat(prompt("Ingrese Calificación de Español"));
mat = parseFloat(prompt("Ingrese Calificación de Matematicas"));
nat = parseFloat(prompt("Ingrese Calificación de Ciencias Naturales"));
dep = parseFloat(prompt("Ingrese Calificación de Deportes"));
ing = parseFloat(prompt("Ingrese Calificación de Ingles"));
art = parseFloat(prompt("Ingrese Calificación de Artes Visuales"));
prom = (esp+mat+nat+dep+ing+art)/6;

if (prom >= 6) {
    alert("El Promedio General es: " + prom + " el Alumno esta Aprobado");
}else {
    alert("El Promedio General es: " + prom + " el Alumno esta Reprobado");
}*/
//por medio de una funcion con un formulario
let esp;
let mat;
let nat;
let dep;
let ing;
let art;

esp = 10;
mat = 8;
nat = 9;
dep = 7;
ing = 9;
art = 10;

function calcularPromedio(){
    //guardar datos
    esp = parseFloat(document.getElementById("español").value);
    mat = parseFloat(document.getElementById("matematicas").value);
    nat = parseFloat(document.getElementById("naturales").value);
    dep = parseFloat(document.getElementById("deportes").value);
    ing = parseFloat(document.getElementById("ingles").value);
    art = parseFloat(document.getElementById("arte").value);
    prom = (esp+mat+nat+dep+ing+art)/6;
    document.getElementById("promedio").value = prom;
}
calcularPromedio();

/*
function calcularPromedio(){
    //llamamos a los elementos por medio del id
    esp = parseFloat(document.getElementById("español").Value);
    mat = parseFloat(document.getElementById("matematicas").value);
    nat = parseFloat(document.getElementById("naturales").value);
    dep = parseFloat(document.getElementById("deportes").value);
    ing = parseFloat(document.getElementById("ingles").value);
    art = parseFloat(document.getElementById("arte").value);
    //realizamos el calculo una vez que llamamos a los id´s
    prom = (esp+mat+nat+dep+ing+art)/6;
    //verificamos el funcionamiento con un console.log
    console.log(prom);
}*/
/*
function calcularPromedio(){
     esp = document.getElementById("español").Value;
     mat = document.getElementById("matematicas").value;
     nat = document.getElementById("naturales").value;
     dep = document.getElementById("deportes").value;
     ing = document.getElementById("ingles").value;
     art = document.getElementById("arte").value;

    let prom = (parseFloat(esp)+parseFloat(mat)+parseFloat(nat)+parseFloat(dep)+parseFloat(ing)+parseFloat(art))/6;
    document.getElementById("btnPromedio").innerHTML = prom;
    console.log(prom);
}
calcularPromedio();
*/
