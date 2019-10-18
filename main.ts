// la clase Telefono debe ser importada desde el archivo que la contenga para poder ser usada
// en este caso, el archivo se llama Telefono, y se indica como ./Telefono porque está en el
// mismo directorio que el archivo main
import { Telefono } from "./Telefono"
import { Mail } from "./Mail"

// se crea el objeto nuevo y se le da el nombre de telefonoVero
var telefonoVero = new Telefono("movil", 650576535);
var mailVero = new Mail("profesional", "ghd@yahoo.com");


// se muestra por pantalla los valores del objeto
console.log("El numero de telefono es " + telefonoVero.getNumero);
console.log("El tipo de telefono es " + telefonoVero.getTipo);

telefonoVero.setNumero(680568746);


console.log("La dirección de mail es " + mailVero.getDireccion);
console.log("El tipo de mail es " + mailVero.getTipo);

